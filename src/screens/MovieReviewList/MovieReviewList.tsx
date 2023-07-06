import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import type {MovieReviewListQuery as MovieReviewListQueryType} from './__generated__/MovieReviewListQuery.graphql';
import {Tab, TabView} from '@rneui/themed';
import {CriticReviewList} from './components/CriticReviewList';
import {RegularReviewList} from './components/RegularReviewList';

export const MovieReviewListQuery = graphql`
  query MovieReviewListQuery($id: ID!) {
    movie(id: $id) {
      id
      ...CriticReviewList
      ...RegularReviewList
    }
  }
`;

type MovieReviewListScreenProps = NativeStackScreenProps<MainStackParams>;

export function MovieReviewListScreen(
  props: MovieReviewListScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.MovieReviewList.queryRef) {
    return <></>;
  }
  return <MovieReviewListScreenWithData {...props} />;
}

function MovieReviewListScreenWithData({
  navigation,
}: MovieReviewListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<MovieReviewListQueryType>(
    MovieReviewListQuery,
    preloadedQueries!.MovieReviewList.queryRef!,
  );
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Tab value={index} onChange={i => setIndex(i)}>
        <Tab.Item title="Critic" />
        <Tab.Item title="Regular" />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item>
          <CriticReviewList
            movie={data.movie}
            onNavigate={() => navigation.navigate('ReviewDetails')}
          />
        </TabView.Item>
        <TabView.Item>
          <RegularReviewList
            movie={data.movie}
            onNavigate={() => navigation.navigate('ReviewDetails')}
          />
        </TabView.Item>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: 6,
  },
});
