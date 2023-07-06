import React from 'react';
import {LikeButton} from '../../../Buttons/LikeButton';
import {graphql} from 'relay-runtime';
import {ReviewLikeButton$key} from './__generated__/ReviewLikeButton.graphql';
import {useFragment} from 'react-relay';

const ReviewLikeButtonFragment = graphql`
  fragment ReviewLikeButton on Review {
    thankCount
    isThankedByViewer
  }
`;

export interface ReviewLikeButtonProps {
  review: ReviewLikeButton$key | null;
}

export function ReviewLikeButton({review}: ReviewLikeButtonProps): JSX.Element {
  const data = useFragment(ReviewLikeButtonFragment, review);
  return (
    <LikeButton
      onPress={() => console.log('test')}
      isActive={data?.isThankedByViewer}
      count={data?.thankCount}
    />
  );
}
