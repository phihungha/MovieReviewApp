import React, {useEffect} from 'react';
import {graphql} from 'relay-runtime';
import {AllMovieList$key} from './__generated__/AllMovieList.graphql';
import {usePaginationFragment} from 'react-relay';
import {AllMovieListRefetchQuery} from './__generated__/AllMovieListRefetchQuery.graphql';
import {GridList} from '../../../components/Lists/GridList';
import {MovieGridItem} from '../../../components/Items/MovieGridItem';
import {StyleSheet} from 'react-native';
import {MoviesListOptions} from '../dialogs/MoviesListOptionsDialog';

const AllMovieListFragment = graphql`
  fragment AllMovieList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 6}
    titleContains: {type: "String"}
    releaseYear: {type: "Int"}
    minCriticScore: {type: "Int"}
    maxCriticScore: {type: "Int"}
    minRegularScore: {type: "Int"}
    maxRegularScore: {type: "Int"}
    genres: {type: "[String!]"}
    sortBy: {type: "MovieSortBy"}
    sortDirection: {type: "SortDirection"}
  )
  @refetchable(queryName: "AllMovieListRefetchQuery") {
    movies(
      after: $cursor
      first: $count
      sortBy: $sortBy
      sortDirection: $sortDirection
      titleContains: $titleContains
      releaseYear: $releaseYear
      genres: $genres
      minCriticScore: $minCriticScore
      maxCriticScore: $maxCriticScore
      minRegularScore: $minRegularScore
      maxRegularScore: $maxRegularScore
    ) @connection(key: "AllMovieListFragment_movies") {
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
  titleContains?: string;
  options?: MoviesListOptions;
  onNavigate?: () => void;
}

export function AllMovieList(props: AllMovieListProps) {
  const {data, loadNext, isLoadingNext, refetch} = usePaginationFragment<
    AllMovieListRefetchQuery,
    AllMovieList$key
  >(AllMovieListFragment, props.movies);

  const options = props.options;

  useEffect(() => {
    refetch({
      titleContains: props.titleContains,
      releaseYear: options?.releaseYear,
      genres: options?.genres,
      minCriticScore: options?.minCriticScore,
      maxCriticScore: options?.maxCriticScore,
      minRegularScore: options?.minRegularScore,
      maxRegularScore: options?.maxRegularScore,
      sortBy: options?.sortBy,
      sortDirection: options?.sortDirection,
    });
  }, [
    props.titleContains,
    options?.releaseYear,
    options?.genres,
    options?.minCriticScore,
    options?.maxCriticScore,
    options?.minRegularScore,
    options?.maxRegularScore,
    options?.sortBy,
    options?.sortDirection,
    refetch,
  ]);

  return (
    <GridList
      data={data.movies.edges}
      keyExtractor={item => item?.node.id ?? '0'}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      renderItem={({item}) => (
        <MovieGridItem
          movie={item?.node ?? null}
          onNavigate={props.onNavigate}
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
