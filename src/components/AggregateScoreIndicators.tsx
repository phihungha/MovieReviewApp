import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../styles/colors';
import {Text} from '@rneui/themed';
import {TitleText} from './TitleText';
import {IconReviewSize, ReviewScoreIndicators} from './ReviewScoreIndicators';

interface AggregateScoreIndicatorProps {
  score: number;
  reviewCount: number;
  style?: StyleProp<ViewStyle>;
}

interface AggregateScoreProps {
  iconName: string;
  score: number;
  reviewCount: number;
  titleText: string;
  isCriticUser: boolean;
  isLeft: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Generic aggregate score button.
 * @param {string} iconName Icon name
 * @param {number} score score value
 * @param {number} reviewCount Count value
 * @param {string} titleText title of label
 * @param {boolean} isCriticUser True if component is the score of Critic user
 * @param {isLeft} boolean True if component is set on the left
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CommentButton count={120} />
 */
export function AggregateScoreIndicators(props: AggregateScoreProps) {
  return (
    <View
      style={[
        aggregateScoreStyles.mainContainer,
        props.isLeft ? aggregateScoreStyles.left : aggregateScoreStyles.right,
        props.style,
      ]}>
      <ReviewScoreIndicators
        iconName="star"
        score={props.score}
        isCriticUser={props.isCriticUser ? true : false}
        marginStart={props.isLeft ? 4 : 0}
        marginEnd={props.isLeft ? 0 : 4}
        size={IconReviewSize.L}
        isLeft={props.isLeft}
      />

      <TitleText>{props.titleText}</TitleText>

      <Text style={[aggregateScoreStyles.textReviewCount]}>
        {props.reviewCount <= 1
          ? props.reviewCount + ' review'
          : props.reviewCount + ' reviews'}
      </Text>
    </View>
  );
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
    <AggregateScoreIndicators
      iconName="star"
      score={props.score}
      reviewCount={props.reviewCount}
      titleText="Critic score"
      isCriticUser={true}
      style={props.style}
      isLeft={true}
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
    <AggregateScoreIndicators
      iconName="star"
      score={props.score}
      reviewCount={props.reviewCount}
      titleText="User score"
      isCriticUser={false}
      style={props.style}
      isLeft={false}
    />
  );
}

const aggregateScoreStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 'auto',
  },
  textReviewCount: {
    color: colors.lightGrey,
  },
  left: {
    paddingLeft: '16%',
    alignItems: 'flex-end',
  },
  right: {
    paddingRight: '16%',
    alignItems: 'flex-start',
  },
});
