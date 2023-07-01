import {AirbnbRating} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';

export type OnRating = (rating: number) => void;

interface CreateReviewRatingProps {
  onRating: OnRating;
}

/**
 * @using display rating in CreateReviewScreen
 * @param {OnRating} onRating action when rating
 */
export function CreateReviewRating(
  props: CreateReviewRatingProps,
): JSX.Element {
  return (
    <View style={styles.rateContainer}>
      <TitleText>Rating</TitleText>

      <AirbnbRating
        showRating={false}
        count={5}
        defaultRating={3}
        size={16}
        onFinishRating={props.onRating}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
