import React from 'react';
import {graphql} from 'relay-runtime';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {useFragment} from 'react-relay';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {CriticReviewList$key} from './__generated__/CriticReviewList.graphql';

const CriticReviewListFragment = graphql`
  fragment CriticReviewList on Movie {
    criticReviews {
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
  onNavigate?: () => void;
}

export function CriticReviewList(
  props: CriticReviewListProps,
): React.JSX.Element {
  const data = useFragment(CriticReviewListFragment, props.movie);

  return (
    <VerticalList
      data={data?.criticReviews.edges}
      renderItem={({item}) => (
        <ReviewListItem
          review={item?.node ?? null}
          onNavigate={props.onNavigate}
        />
      )}
    />
  );
}
