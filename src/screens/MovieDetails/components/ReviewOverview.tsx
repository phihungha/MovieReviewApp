import React, {useState} from 'react';
import {MovieDetailsQuery$data} from '../__generated__/MovieDetailsQuery.graphql';
import {Button, Tab, TabView} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {ReviewListItem} from '../../../components/Items/ReviewListItem';
import {MainStackParams} from '../../../navigators/MainStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Navigation = NativeStackScreenProps<
  MainStackParams,
  'MovieDetails'
>['navigation'];

export function ReviewsOverview({
  data,
  navigation,
}: {
  data: MovieDetailsQuery$data;
  navigation: Navigation;
}): React.JSX.Element {
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
            {data.movie?.criticReviews.edges.map(i => (
              <ReviewListItem review={i?.node ?? null} />
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
            {data.movie?.regularReviews.edges.map(i => (
              <ReviewListItem review={i?.node ?? null} />
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
