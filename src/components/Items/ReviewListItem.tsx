import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../Display/ReviewInfoDisplay';
import {HorizontalProfileDisplay} from '../Display/HorizontalProfileDisplay';
import colors from '../../styles/colors';
import {CommentButton} from '../Buttons/CommentButton';
import {LikeButton} from '../Buttons/LikeButton';

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
        <LikeButton
          onPress={() => console.log('test')}
          isActive={true}
          count={120}
        />
        <CommentButton onPress={() => console.log('test')} count={120} />
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
