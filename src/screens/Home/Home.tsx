import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import type {
  HomeQuery as HomeQueryType,
  HomeQuery$data,
} from './__generated__/HomeQuery.graphql';
import {TrendingMovieList} from './components/TrendingMovieList';
import {JustReleasedMovieList} from './components/JustReleasedMovieList';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';

export const HomeQuery = graphql`
  query HomeQuery {
    ...TrendingMovieList
    ...JustReleasedMovieList
  }
`;

export function HomeScreen(): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.Home.queryRef) {
    return <></>;
  }
  return <HomeScreenWithData />;
}

function HomeScreenWithData() {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<HomeQueryType>(
    HomeQuery,
    preloadedQueries!.Home.queryRef!,
  );

  return (
    <View style={styles.container}>
      <JustReleasedMovieList
        ListHeaderComponent={<ListHeader queryData={data} />}
        justReleasedMovies={data}
      />
    </View>
  );
}

interface ListHeaderProps {
  queryData: HomeQuery$data;
}

function ListHeader({queryData}: ListHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.sectionContainer}>
        <BigTitleText>Popular</BigTitleText>
        <TrendingMovieList trendingMovies={queryData} />
      </View>
      <BigTitleText>Recently released</BigTitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerContainer: {
    gap: 10,
    marginBottom: 10,
  },
  sectionContainer: {
    gap: 10,
  },
});
