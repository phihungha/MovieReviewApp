import React, {useContext, useState} from 'react';
import {Button, Tab, TabView} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {MainStackParams} from '../../../navigators/MainStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {ReviewOverview$key} from './__generated__/ReviewOverview.graphql';
import {useFragment} from 'react-relay';
import {PreloadedQueriesContext} from '../../../relay/PreloadedQueriesContext';

const ReviewOverviewFragment = graphql`
  fragment ReviewOverview on Movie {
    id
    criticReviews(first: 3, sortBy: ThankCount) {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
    regularReviews(first: 3, sortBy: ThankCount) {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
    viewerReview {
      ...ReviewListItem
    }
  }
`;

type Navigation = NativeStackScreenProps<
  MainStackParams,
  'MovieDetails'
>['navigation'];

export interface ReviewOverviewProps {
  movie: ReviewOverview$key | null;
  navigation: Navigation;
}

export function ReviewOverview({
  movie,
  navigation,
}: ReviewOverviewProps): React.JSX.Element {
  const data = useFragment(ReviewOverviewFragment, movie);
  const preloadedQueries = useContext(PreloadedQueriesContext);

  const onAllReviewBtnPressed = (
    firstTab: 'regular' | 'critic' | 'personal',
  ) => {
    if (data?.id) {
      preloadedQueries?.MovieReviewList.loadQuery({id: data.id});
    }
    navigation.navigate('MovieReviewList', {firstTab});
  };

  const [index, setIndex] = useState(0);
  // ScrollView doesn't increase height automatically
  // on list additions in TabView
  const [tab1Height, setTab1Height] = useState(0);
  const [tab2Height, setTab2Height] = useState(0);
  const [tab3Height, setTab3Height] = useState(0);
  let tabViewHeight;
  switch (index) {
    case 0:
      tabViewHeight = tab1Height;
      break;
    case 1:
      tabViewHeight = tab2Height;
      break;
    case 2:
      tabViewHeight = tab3Height;
      break;
  }

  return (
    <>
      <Tab value={index} onChange={i => setIndex(i)}>
        <Tab.Item title="Critic" />
        <Tab.Item title="Regular" />
        <Tab.Item title="Mine" />
      </Tab>
      <TabView
        containerStyle={{height: tabViewHeight}}
        value={index}
        onChange={setIndex}>
        <TabView.Item>
          <View
            style={styles.reviewOverviewList}
            onLayout={e => setTab1Height(e.nativeEvent.layout.height)}>
            {data?.criticReviews.edges.map(i => (
              <ReviewListItem key={i?.node.id} review={i?.node ?? null} />
            ))}
            <Button
              onPress={() => onAllReviewBtnPressed('critic')}
              title="All reviews"
            />
          </View>
        </TabView.Item>
        <TabView.Item>
          <View
            style={styles.reviewOverviewList}
            onLayout={e => setTab2Height(e.nativeEvent.layout.height)}>
            {data?.regularReviews.edges.map(i => (
              <ReviewListItem key={i?.node.id} review={i?.node ?? null} />
            ))}
            <Button
              onPress={() => onAllReviewBtnPressed('regular')}
              title="All reviews"
            />
          </View>
        </TabView.Item>
        <TabView.Item>
          <View
            style={styles.reviewOverviewList}
            onLayout={e => setTab3Height(e.nativeEvent.layout.height)}>
            {data?.viewerReview && (
              <ReviewListItem review={data.viewerReview} />
            )}
            <Button
              onPress={() => onAllReviewBtnPressed('personal')}
              title="All reviews"
            />
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  reviewOverviewList: {
    gap: 10,
  },
});
