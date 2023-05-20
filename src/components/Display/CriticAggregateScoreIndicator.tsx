import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';
import {AggregateScoreIndicator} from './AggregateScoreIndicator';
import {AggregateScoreIndicatorProps} from '../../props/AggergateScoreIndicatorProps';

/**
 * Display critics' aggregate score and review count.
 * @param {number} score Aggregate score
 * @param {number} reviewCount Number of reviews
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CriticAggregateScoreIndicator score={8.3} reviewCount={211} />
 */
export function CriticAggregateScoreIndicator(
  props: AggregateScoreIndicatorProps,
): JSX.Element {
  return (
    <AggregateScoreIndicator
      iconName="star"
      title="Critic score"
      score={props.score}
      reviewCount={props.reviewCount}
      isLeft={true}
      style={props.style}
      iconStyle={styles.criticIcon}
      textStyle={styles.scoreText}
    />
  );
}

const styles = StyleSheet.create({
  criticIcon: {
    fontSize: fontSizes.xl2,
    color: colors.yellow,
  },
  scoreText: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
});
