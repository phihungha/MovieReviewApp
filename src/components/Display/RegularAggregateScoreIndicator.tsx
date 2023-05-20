import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';
import {AggregateScoreIndicator} from './AggregateScoreIndicator';
import {AggregateScoreIndicatorProps} from '../../props/AggergateScoreIndicatorProps';

/**
 * Display regular users' aggregate score and review count.
 * @param {number} score Aggregate score
 * @param {number} reviewCount Number of reviews
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <RegularAggregateScoreIndicator score={8.3} reviewCount={211} />
 */
export function RegularAggregateScoreIndicator(
  props: AggregateScoreIndicatorProps,
): JSX.Element {
  return (
    <AggregateScoreIndicator
      iconName="star"
      title="User score"
      score={props.score}
      reviewCount={props.reviewCount}
      isLeft={false}
      style={props.style}
      iconStyle={styles.regularIcon}
      textStyle={styles.scoreText}
    />
  );
}

const styles = StyleSheet.create({
  regularIcon: {
    fontSize: fontSizes.xl2,
    color: colors.darkBlue,
  },
  scoreText: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
});
