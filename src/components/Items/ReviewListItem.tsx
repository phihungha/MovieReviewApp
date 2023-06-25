import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../Display/ReviewInfoDisplay';
import {HorizontalProfileDisplay} from '../Display/HorizontalProfileDisplay';
import colors from '../../styles/colors';
import {ReviewCommentButton} from '../Buttons/ReviewCommentButton';
import {ReviewLikeButton} from '../Buttons/ReviewLikeButton';
import {ItemTitleOnly} from './BottomSheetListItem';
import {ReviewListItemMoreButton} from '../Buttons/ReviewListItemMoreButton';

/**
 * Item for a list of reviews.
 */
export function ReviewListItem(): JSX.Element {
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'hide':
        console.log('hide review');
        break;
      case 'open':
        console.log('open review');
        break;
      case 'share':
        console.log('share review');
        break;
    }
  };

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

      <ReviewListItemMoreButton onSelectedItem={onSelectedItem} />
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
