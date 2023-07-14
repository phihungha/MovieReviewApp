import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes} from '../../styles/typography';
import {ReviewScoreIndicator} from './ReviewScoreIndicator';
import {ReviewScoreIndicatorProps} from '../../props/ReviewIndicatorProps';

/**
 * Displays review score of a regular user.
 * @param {number | null | undefined} score Score value
 * @param {fullScore?} boolean True if the score format is x/10
 * @param {StyleProp<ViewStyle>} style Style
 * @param {StyleProp<TextStyle>} iconStyle Style for icon
 * @param {StyleProp<TextStyle>} textStyle Style for text
 * @example
 * <RegularReviewScoreIndicator score={5} />
 */
export function RegularReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <ReviewScoreIndicator
      iconName="star"
      iconStyle={[styles.regularIcon, props.iconStyle]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  regularIcon: {
    fontSize: fontSizes.lg,
    color: colors.darkBlue,
  },
});
