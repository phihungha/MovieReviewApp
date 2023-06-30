import {graphql} from 'relay-runtime';
import {GridList} from './GridList';
import {JustReleasedMovieList$key} from './__generated__/JustReleasedMovieList.graphql';
import {usePaginationFragment} from 'react-relay';
import {MovieGridItem} from '../Items/MovieGridItem';
import {StyleSheet} from 'react-native';

const JustReleasedMovieListFragment = graphql`
  fragment JustReleasedMovieList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 1}
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

export function JustReleasedMovieList(props: JustReleasedMovieListProps) {
  const {data, loadNext, isLoadingNext} = usePaginationFragment(
    JustReleasedMovieListFragment,
    props.justReleasedMovies,
  );
  return (
    <GridList
      ListHeaderComponent={props.ListHeaderComponent}
      data={data.justReleasedMovies.edges}
      keyExtractor={item => item?.node.id ?? '0'}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(1)}
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
