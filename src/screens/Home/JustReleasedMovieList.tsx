import React from 'react';
import {graphql} from 'relay-runtime';
import {JustReleasedMovieList$key} from './__generated__/JustReleasedMovieList.graphql';
import {usePaginationFragment} from 'react-relay';
import {StyleSheet} from 'react-native';
import type {JustReleasedMovieListRefetchQuery} from './__generated__/JustReleasedMovieListRefetchQuery.graphql';
import {GridList} from '../../components/Lists/GridList';
import {MovieGridItem} from '../../components/Items/MovieGridItem';

const JustReleasedMovieListFragment = graphql`
  fragment JustReleasedMovieList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 6}
  )
  @refetchable(queryName: "JustReleasedMovieListRefetchQuery") {
    justReleasedMovies(after: $cursor, first: $count)
      @connection(key: "JustReleasedMovieListFragment_justReleasedMovies") {
      edges {
        node {
          id
          ...MovieGridItemFragment
        }
      }
    }
  }
`;

export interface JustReleasedMovieListProps {
  justReleasedMovies: JustReleasedMovieList$key;
  onItemPressed?: () => void;
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null;
}

export function JustReleasedMovieList(
  props: JustReleasedMovieListProps,
): JSX.Element {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    JustReleasedMovieListRefetchQuery,
    JustReleasedMovieList$key
  >(JustReleasedMovieListFragment, props.justReleasedMovies);
  return (
    <GridList
      ListHeaderComponent={props.ListHeaderComponent}
      data={data.justReleasedMovies.edges}
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
