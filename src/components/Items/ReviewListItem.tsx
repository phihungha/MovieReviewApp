import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../Display/ReviewInfoDisplay';
import {HorizontalProfileDisplay} from '../Display/HorizontalProfileDisplay';
import colors from '../../styles/colors';
import {ReviewCommentButton} from '../Buttons/ReviewCommentButton';
import {ReviewLikeButton} from '../Buttons/ReviewLikeButton';

/**
 * Item for a list of reviews.
 */
export function ReviewListItem(): JSX.Element {
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
