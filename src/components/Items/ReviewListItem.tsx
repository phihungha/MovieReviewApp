import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../Display/ReviewInfoDisplay';
import {HorizontalProfileDisplay} from '../Display/HorizontalProfileDisplay';
import colors from '../../styles/colors';
import {ReviewCommentButton} from '../Buttons/ReviewCommentButton';
import {ReviewLikeButton} from '../Buttons/ReviewLikeButton';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {ReviewListItem$key} from './__generated__/ReviewListItem.graphql';
import {HorizontalUserDisplay} from '../Display/HorizontalUserDisplay';

const ReviewListItemFragment = graphql`
  fragment ReviewListItem on Review {
    ...ReviewInfoDisplay
    author {
      ...HorizontalUserDisplay
    }
  }
`;

export interface ReviewListItemProps {
  review?: ReviewListItem$key | null;
}

/**
 * Item for a list of reviews.
 */
export function ReviewListItem(props: ReviewListItemProps): React.JSX.Element {
  if (!props.review) {
    return (
      <View style={styles.container}>
        <HorizontalProfileDisplay
          imageUrl="https://cinerate-movie-review.s3.amazonaws.com/public/userProfileImages/1.jpg"
          name="Roger Ebert"
          role="Critic"
        />
        <ReviewInfoDisplay style={styles.infoContainer} />
        <View style={styles.buttonsContainer}>
          <ReviewLikeButton />
          <ReviewCommentButton />
        </View>
      </View>
    );
  }
  return <ReviewListItemWithData {...props} />;
}

function ReviewListItemWithData({
  review,
}: ReviewListItemProps): React.JSX.Element {
  const data = useFragment(ReviewListItemFragment, review!);
  return (
    <View style={styles.container}>
      <HorizontalUserDisplay user={data.author} />
      <ReviewInfoDisplay review={data} style={styles.infoContainer} />
      <View style={styles.buttonsContainer}>
        <ReviewLikeButton />
        <ReviewCommentButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 5,
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
