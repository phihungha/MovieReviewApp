import React, {useEffect} from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {RegularReviewList$key} from './__generated__/RegularReviewList.graphql';
import {RegularReviewListRefetchQuery} from './__generated__/RegularReviewListRefetchQuery.graphql';
import {MovieReviewListOptions} from '../dialogs/MovieReviewListOptionsDialog';

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
    )
      @connection(
        key: "RegularReviewListFragment_regularReviews"
        filters: []
      ) {
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
  options?: MovieReviewListOptions;
}

export function RegularReviewList(
  props: RegularReviewListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext, refetch} = usePaginationFragment<
    RegularReviewListRefetchQuery,
    RegularReviewList$key
  >(RegularReviewListFragment, props.movie);

  const options = props.options;

  useEffect(() => {
    refetch(
      {
        textContains: props.textContains,
        minScore: options?.minScore,
        maxScore: options?.maxScore,
        sortBy: options?.sortBy,
        sortDirection: options?.sortDirection,
      },
      {fetchPolicy: 'network-only'},
    );
  }, [
    props.textContains,
    options?.minScore,
    options?.maxScore,
    options?.sortBy,
    options?.sortDirection,
    refetch,
  ]);

  return (
    <VerticalList
      data={data?.regularReviews.edges}
      isLoading={isLoadingNext}
      keyExtractor={item => item?.node.id ?? '0'}
      onEndReached={() => loadNext(4)}
      renderItem={({item}) => <ReviewListItem review={item?.node ?? null} />}
    />
  );
}
