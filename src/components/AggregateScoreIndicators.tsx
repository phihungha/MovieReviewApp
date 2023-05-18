import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {IconAggregateScore} from './IconAggregateScore';

interface AggregateScoreIndicatorProps {
  score: number;
  reviewCount: number;
  style?: StyleProp<ViewStyle>;
}

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
    <IconAggregateScore
      iconName="star"
      score={props.score}
      reviewCount={props.reviewCount}
      titleText="Critic score"
      isCriticUser={true}
      style={props.style}
    />
  );
}

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
    <IconAggregateScore
      iconName="star"
      score={props.score}
      reviewCount={props.reviewCount}
      titleText="User score"
      isCriticUser={false}
      style={props.style}
    />
  );
}
