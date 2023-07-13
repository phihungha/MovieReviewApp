import React from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {AllUserReviewList$key} from './__generated__/AllUserReviewList.graphql';
import {AllUserReviewListRefetchQuery} from './__generated__/AllUserReviewListRefetchQuery.graphql';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';

const AllUserReviewListFragment = graphql`
  fragment AllUserReviewList on User
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 10}
  )
  @refetchable(queryName: "AllUserReviewListRefetchQuery") {
    reviews(after: $cursor, first: $count)
      @connection(key: "AllUserReviewListFragment_reviews") {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
  }
`;

export interface AllUserReviewListProps {
  user: AllUserReviewList$key | null;
}

export function AllUserReviewList(
  props: AllUserReviewListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext} = usePaginationFragment<
    AllUserReviewListRefetchQuery,
    AllUserReviewList$key
  >(AllUserReviewListFragment, props.user);

  return (
    <VerticalList
      data={data?.reviews.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => (
        <ReviewListItem review={item?.node ?? null} movieHeader={true} />
      )}
    />
  );
}
