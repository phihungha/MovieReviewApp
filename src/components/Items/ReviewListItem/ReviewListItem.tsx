import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../../Display/ReviewInfoDisplay';
import colors from '../../../styles/colors';
import {ReviewCommentButton} from './components/ReviewCommentButton';
import {ReviewLikeButton} from './components/ReviewLikeButton';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {ReviewListItem$key} from './__generated__/ReviewListItem.graphql';
import {HorizontalUserDisplay} from '../../Display/HorizontalUserDisplay';

const ReviewListItemFragment = graphql`
  fragment ReviewListItem on Review {
    ...ReviewInfoDisplay
    author {
      ...HorizontalUserDisplay
    }
    ...ReviewLikeButton
    ...ReviewCommentButton
  }
`;

export interface ReviewListItemProps {
  review: ReviewListItem$key | null;
}

/**
 * Item for a list of reviews.
 */
export function ReviewListItem({
  review,
}: ReviewListItemProps): React.JSX.Element {
  const data = useFragment(ReviewListItemFragment, review);
  return (
    <View style={styles.container}>
      <HorizontalUserDisplay user={data?.author ?? null} />
      <ReviewInfoDisplay
        review={data}
        maxContentLineCount={3}
        style={styles.infoContainer}
      />
      <View style={styles.buttonsContainer}>
        <ReviewLikeButton review={data} />
        <ReviewCommentButton review={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  infoContainer: {
    padding: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
});
