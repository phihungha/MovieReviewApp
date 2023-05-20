import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes} from '../../styles/typography';
import {ReviewScoreIndicator} from './ReviewScoreIndicator';
import {ReviewScoreIndicatorProps} from '../../props/ReviewIndicatorProps';

/**
 * Displays review score of a regular user.
 * @param {number} score Score value
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <RegularReviewScoreIndicator score={5} />
 */
export function RegularReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <ReviewScoreIndicator
      iconName="star"
      score={props.score}
      style={props.style}
      isLeft={true}
      iconStyle={styles.regularIcon}
    />
  );
}

const styles = StyleSheet.create({
  regularIcon: {
    fontSize: fontSizes.lg,
    color: colors.darkBlue,
  },
});
