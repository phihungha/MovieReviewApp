import React, {useEffect} from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {AllUserList$key} from './__generated__/AllUserList.graphql';
import {AllUserListRefetchQuery} from './__generated__/AllUserListRefetchQuery.graphql';
import {UserListItem} from '../../../components/Items/UserListItem';
import {ActionCb} from '../../../types/ActionCb';

const AllUserListFragment = graphql`
  fragment AllUserList on Query
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 10}
    nameContains: {type: "String"}
  )
  @refetchable(queryName: "AllUserListRefetchQuery") {
    users(after: $cursor, first: $count, nameContains: $nameContains)
      @connection(key: "AllUserListFragment_users") {
      edges {
        node {
          id
          ...UserListItem
        }
      }
    }
  }
`;

export interface AllUserListProps {
  users: AllUserList$key | null;
  nameContains?: string;
  onNavigate?: ActionCb;
}

export function AllUserList(props: AllUserListProps): React.JSX.Element {
  const {data, loadNext, isLoadingNext, refetch} = usePaginationFragment<
    AllUserListRefetchQuery,
    AllUserList$key
  >(AllUserListFragment, props.users);

  useEffect(() => {
    refetch({nameContains: props.nameContains});
  }, [props.nameContains, refetch]);

  return (
    <VerticalList
      data={data?.users.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => (
        <UserListItem user={item?.node ?? null} onNavigate={props.onNavigate} />
      )}
    />
  );
}
