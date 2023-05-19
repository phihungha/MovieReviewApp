import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import colors from '../styles/colors';
import {Text} from '@rneui/themed';
import {TitleText} from './TitleText';
import {ReviewScoreIndicator} from './ReviewScoreIndicators';
import {fontSizes, fonts} from '../styles/typography';

interface SpecificAggregateScoreIndicatorProps {
  score: number;
  reviewCount: number;
  style?: StyleProp<ViewStyle>;
}

interface AggregateScoreIndicatorProps {
  iconName: string;
  title: string;
  score: number;
  reviewCount: number;
  isLeft: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/**
 * Generic aggregate score indicator.
 * @param {string} iconName Icon name
 * @param {string} title Title of the indicator.
 * @param {number} score Score value
 * @param {number} reviewCount Number of reviews
 * @param {isLeft} boolean True if component is set on the left
 * @param {StyleProp<ViewStyle>} style Style
 * @param {StyleProp<TextStyle>} iconStyle Style of icon
 * @param {StyleProp<ViewStyle>} textStyle Style of score value
 */
export function AggregateScoreIndicator(props: AggregateScoreIndicatorProps) {
  return (
    <View
      style={[
        styles.container,
        props.isLeft ? styles.leftAlignContainer : styles.rightAlignContainer,
        props.style,
      ]}>
      <ReviewScoreIndicator
        iconName="star"
        score={props.score}
        isLeft={props.isLeft}
        style={styles.scoreIndicator}
        iconStyle={props.iconStyle}
        textStyle={props.textStyle}
      />
      <TitleText>{props.title}</TitleText>
      <Text style={[styles.reviewCountText]}>
        {props.reviewCount} {props.reviewCount > 1 ? 'reviews' : 'review'}
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
  props: SpecificAggregateScoreIndicatorProps,
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

/**
 * Display regular users' aggregate score and review count.
 * @param {number} score Aggregate score
 * @param {number} reviewCount Number of reviews
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <RegularAggregateScoreIndicator score={8.3} reviewCount={211} />
 */
export function RegularAggregateScoreIndicator(
  props: SpecificAggregateScoreIndicatorProps,
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
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
  },
  reviewCountText: {
    color: colors.lightGrey,
  },
  leftAlignContainer: {
    paddingLeft: '16%',
    alignItems: 'flex-end',
  },
  rightAlignContainer: {
    paddingRight: '16%',
    alignItems: 'flex-start',
  },
  scoreIndicator: {
    alignSelf: 'auto',
  },
  criticIcon: {
    fontSize: fontSizes.xl2,
    color: colors.yellow,
  },
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
