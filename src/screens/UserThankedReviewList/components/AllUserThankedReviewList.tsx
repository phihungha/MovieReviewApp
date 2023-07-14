import React from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {AllUserThankedReviewList$key} from './__generated__/AllUserThankedReviewList.graphql';
import {AllUserThankedReviewListRefetchQuery} from './__generated__/AllUserThankedReviewListRefetchQuery.graphql';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';

const AllUserThankedReviewListFragment = graphql`
  fragment AllUserThankedReviewList on User
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 10}
  )
  @refetchable(queryName: "AllUserThankedReviewListRefetchQuery") {
    reviewThanks(after: $cursor, first: $count)
      @connection(key: "AllUserThankedReviewListFragment_reviewThanks") {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
  }
`;

export interface AllUserThankedReviewListProps {
  user: AllUserThankedReviewList$key | null;
}

export function AllUserThankedReviewList(
  props: AllUserThankedReviewListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    AllUserThankedReviewListRefetchQuery,
    AllUserThankedReviewList$key
  >(AllUserThankedReviewListFragment, props.user);

  return (
    <VerticalList
      data={data?.reviewThanks.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => (
        <ReviewListItem review={item?.node ?? null} movieHeader={true} />
      )}
    />
  );
}
