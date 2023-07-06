import React, {useState} from 'react';
import {Button, Tab, TabView} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {MainStackParams} from '../../../navigators/MainStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {ReviewOverview$key} from './__generated__/ReviewOverview.graphql';
import {useFragment} from 'react-relay';

const ReviewOverviewFragment = graphql`
  fragment ReviewOverview on Movie {
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

  const [index, setIndex] = useState(0);
  // ScrollView doesn't increase height automatically
  // on list additions in TabView
  const [tab1Height, setTab1Height] = useState(0);
  const [tab2Height, setTab2Height] = useState(0);
  const tabViewHeight = index === 0 ? tab1Height : tab2Height;

  return (
    <>
      <Tab value={index} onChange={i => setIndex(i)}>
        <Tab.Item title="Critic" />
        <Tab.Item title="Regular" />
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
              onPress={() =>
                navigation.navigate('MovieReviewList', {firstTab: 'critic'})
              }
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
              onPress={() =>
                navigation.navigate('MovieReviewList', {firstTab: 'regular'})
              }
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
