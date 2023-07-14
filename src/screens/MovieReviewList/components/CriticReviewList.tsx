import React, {useEffect} from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {usePaginationFragment} from 'react-relay';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {CriticReviewList$key} from './__generated__/CriticReviewList.graphql';
import {CriticReviewListRefetchQuery} from './__generated__/CriticReviewListRefetchQuery.graphql';
import {MovieReviewListOptions} from '../dialogs/MovieReviewListOptionsDialog';

const CriticReviewListFragment = graphql`
  fragment CriticReviewList on Movie
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 4}
    textContains: {type: "String"}
    minScore: {type: "Int"}
    maxScore: {type: "Int"}
    sortBy: {type: "ReviewSortBy"}
    sortDirection: {type: "SortDirection"}
  )
  @refetchable(queryName: "CriticReviewListRefetchQuery") {
    criticReviews(
      after: $cursor
      first: $count
      sortBy: $sortBy
      sortDirection: $sortDirection
      textContains: $textContains
      minScore: $minScore
      maxScore: $maxScore
    ) @connection(key: "CriticReviewListFragment_criticReviews", filters: []) {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
  }
`;

export interface CriticReviewListProps {
  movie: CriticReviewList$key | null;
  textContains?: string;
  options?: MovieReviewListOptions;
}

export function CriticReviewList(
  props: CriticReviewListProps,
): React.JSX.Element {
  const {data, loadNext, isLoadingNext, refetch} = usePaginationFragment<
    CriticReviewListRefetchQuery,
    CriticReviewList$key
  >(CriticReviewListFragment, props.movie);

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
      data={data?.criticReviews.edges}
      isLoading={isLoadingNext}
      onEndReached={() => loadNext(4)}
      keyExtractor={item => item?.node.id ?? '0'}
      renderItem={({item}) => <ReviewListItem review={item?.node ?? null} />}
    />
  );
}
