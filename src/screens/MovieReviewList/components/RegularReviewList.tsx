import React, {useEffect} from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {RegularReviewList$key} from './__generated__/RegularReviewList.graphql';
import {RegularReviewListRefetchQuery} from './__generated__/RegularReviewListRefetchQuery.graphql';

const RegularReviewListFragment = graphql`
  fragment RegularReviewList on Movie
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 4}
    textContains: {type: "String"}
    minScore: {type: "Int"}
    maxScore: {type: "Int"}
    sortBy: {type: "ReviewSortBy"}
    sortDirection: {type: "SortDirection"}
  )
  @refetchable(queryName: "RegularReviewListRefetchQuery") {
    regularReviews(
      after: $cursor
      first: $count
      sortBy: $sortBy
      sortDirection: $sortDirection
      textContains: $textContains
      minScore: $minScore
      maxScore: $maxScore
    ) @connection(key: "RegularReviewListFragment_regularReviews") {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
  }
`;

export interface RegularReviewListProps {
  movie: RegularReviewList$key | null;
  textContains?: string;
  onNavigate?: () => void;
}

export function RegularReviewList(
  props: RegularReviewListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext, refetch} = usePaginationFragment<
    RegularReviewListRefetchQuery,
    RegularReviewList$key
  >(RegularReviewListFragment, props.movie);

  useEffect(() => {
    refetch({
      textContains: props.textContains,
    });
  }, [props.textContains, refetch]);

  return (
    <VerticalList
      data={data?.regularReviews.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      renderItem={({item}) => (
        <ReviewListItem
          review={item?.node ?? null}
          onNavigate={props.onNavigate}
        />
      )}
    />
  );
}
