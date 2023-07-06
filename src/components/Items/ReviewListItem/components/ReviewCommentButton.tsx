import React from 'react';
import {CommentButton} from '../../../Buttons/CommentButton';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {ReviewCommentButton$key} from './__generated__/ReviewCommentButton.graphql';

const ReviewCommentButtonFragment = graphql`
  fragment ReviewCommentButton on Review {
    commentCount
  }
`;

export interface ReviewCommentButtonProps {
  review: ReviewCommentButton$key | null;
}

export function ReviewCommentButton({
  review,
}: ReviewCommentButtonProps): JSX.Element {
  const data = useFragment(ReviewCommentButtonFragment, review);
  return (
    <CommentButton
      onPress={() => console.log('test')}
      count={data?.commentCount}
    />
  );
}
