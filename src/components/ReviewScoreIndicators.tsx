import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {IconReviewScore} from './IconReviewScore';

interface ReviewScoreIndicatorProps {
  score: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays review score of a critic.
 * @param {number} score Score value
 * @example
 * <CriticReviewScoreIndicator score={4.5} />
 */
export function CriticReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <IconReviewScore
      iconName="star"
      score={props.score}
      isCriticUser={true}
      style={props.style}
    />
  );
}

/**
 * Displays review score of a regular user.
 * @param {number} score Score value
 * @example
 * <UserReviewScoreIndicator score={4.5} />
 */
export function RegularReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <IconReviewScore
      iconName="star"
      score={props.score}
      isCriticUser={false}
      style={props.style}
    />
  );
}
