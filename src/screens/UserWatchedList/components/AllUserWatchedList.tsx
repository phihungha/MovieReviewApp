import React from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {AllUserWatchedList$key} from './__generated__/AllUserWatchedList.graphql';
import {AllUserWatchedListRefetchQuery} from './__generated__/AllUserWatchedListRefetchQuery.graphql';
import {WatchedMovieListItem} from '../../../components/Items/WatchedMovieListItem';

const AllUserWatchedListFragment = graphql`
  fragment AllUserWatchedList on User
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 10}
  )
  @refetchable(queryName: "AllUserWatchedListRefetchQuery") {
    viewedMovies(after: $cursor, first: $count)
      @connection(key: "AllUserWatchedListFragment_viewedMovies") {
      edges {
        node {
          id
          ...WatchedMovieListItem
        }
      }
    }
  }
`;

export interface AllUserWatchedListProps {
  user: AllUserWatchedList$key | null;
}

export function AllUserWatchedList(
  props: AllUserWatchedListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    AllUserWatchedListRefetchQuery,
    AllUserWatchedList$key
  >(AllUserWatchedListFragment, props.user);

  return (
    <VerticalList
      data={data?.viewedMovies.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => (
        <WatchedMovieListItem movie={item?.node ?? null} />
      )}
    />
  );
}
