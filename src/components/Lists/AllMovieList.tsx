import React from 'react';
import {graphql} from 'relay-runtime';
import {AllMovieList$key} from './__generated__/AllMovieList.graphql';
import {usePaginationFragment} from 'react-relay';
import {AllMovieListRefetchQuery} from './__generated__/AllMovieListRefetchQuery.graphql';
import {GridList} from './GridList';
import {MovieGridItem} from '../Items/MovieGridItem';
import {StyleSheet} from 'react-native';

const AllMovieListFragment = graphql`
  fragment AllMovieList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 6}
  )
  @refetchable(queryName: "AllMovieListRefetchQuery") {
    movies(after: $cursor, first: $count)
      @connection(key: "AllMovieListFragment_movies") {
      edges {
        node {
          id
          ...MovieGridItemFragment
        }
      }
    }
  }
`;

export interface AllMovieListProps {
  movies: AllMovieList$key;
  onItemPressed?: () => void;
}

export function AllMovieList(props: AllMovieListProps) {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    AllMovieListRefetchQuery,
    AllMovieList$key
  >(AllMovieListFragment, props.movies);

  return (
    <GridList
      data={data.movies.edges}
      keyExtractor={item => item?.node.id ?? '0'}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      renderItem={({item}) => (
        <MovieGridItem
          movie={item?.node ?? null}
          onPress={props.onItemPressed}
          containerStyle={styles.verticalGridItem}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  verticalGridItem: {
    flex: 0.5,
  },
});
