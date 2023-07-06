import React from 'react';
import {graphql} from 'relay-runtime';
import {CommentList$key} from './__generated__/CommentList.graphql';
import {usePaginationFragment} from 'react-relay';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {CommentListItem} from '../../../components/Items/CommentListItem/CommentListItem';

const CommentListFragment = graphql`
  fragment CommentList on Review
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 8}
  )
  @refetchable(queryName: "CommentListRefetchQuery") {
    comments(after: $cursor, first: $count)
      @connection(key: "CommentListFragment_comments") {
      edges {
        node {
          id
          ...CommentListItem
        }
      }
    }
  }
`;

export interface CommentListProps {
  review: CommentList$key | null;
}

export function CommentList({review}: CommentListProps) {
  const {data, loadNext, isLoadingNext} = usePaginationFragment(
    CommentListFragment,
    review,
  );
  return (
    <VerticalList
      data={data?.comments.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(8)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => <CommentListItem comment={item?.node ?? null} />}
    />
  );
}
