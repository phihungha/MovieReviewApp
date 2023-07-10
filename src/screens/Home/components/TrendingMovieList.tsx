import React from 'react';
import {graphql} from 'relay-runtime';
import {TrendingMovieList$key} from './__generated__/TrendingMovieList.graphql';
import {HorizontalList} from '../../../components/Lists/HorizontalList';
import {usePaginationFragment} from 'react-relay';
import {MovieGridItem} from '../../../components/Items/MovieGridItem';
import {StyleSheet} from 'react-native';
import type {TrendingMovieListRefetchQuery} from './__generated__/TrendingMovieListRefetchQuery.graphql';

const TrendingMovieListFragment = graphql`
  fragment TrendingMovieList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 6}
  )
  @refetchable(queryName: "TrendingMovieListRefetchQuery") {
    trendingMovies(after: $cursor, first: $count)
      @connection(key: "TrendingMovieListFragment_trendingMovies") {
      edges {
        node {
          id
          ...MovieGridItemFragment
        }
      }
    }
  }
`;

export interface TrendingMovieListProps {
  trendingMovies: TrendingMovieList$key;
}

export function TrendingMovieList(props: TrendingMovieListProps): JSX.Element {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    TrendingMovieListRefetchQuery,
    TrendingMovieList$key
  >(TrendingMovieListFragment, props.trendingMovies);
  return (
    <HorizontalList
      data={data.trendingMovies.edges}
      keyExtractor={item => item?.node.id ?? '0'}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(3)}
      renderItem={({item}) => (
        <MovieGridItem
          movie={item?.node ?? null}
          containerStyle={styles.horizontalGridItem}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  horizontalGridItem: {
    width: 155,
  },
});
