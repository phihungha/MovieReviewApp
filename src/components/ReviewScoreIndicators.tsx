import {Text} from '@rneui/themed';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';

interface ReviewScoreIndicatorProps {
  iconName: string;
  score: number;
  isLeft: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/**
 * Generic review score indicator.
 * @param {string} iconName Icon name
 * @param {number} score Score value
 * @param {isLeft} boolean True if icon is on the left of score value
 * @param {StyleProp<ViewStyle>} style Style
 * @param {StyleProp<TextStyle>} iconStyle Style of icon
 * @param {StyleProp<ViewStyle>} textStyle Style of score value
 */
export function ReviewScoreIndicator(props: ReviewScoreIndicatorProps) {
  return (
    <View
      style={[
        styles.container,
        props.isLeft ? {} : styles.rightIcon,
        props.style,
      ]}>
      <Icon
        name={props.iconName}
        style={[styles.regularIcon, props.iconStyle]}
      />
      <Text style={[styles.scoreText, props.textStyle]}>{props.score}</Text>
    </View>
  );
}

export interface SpecificReviewScoreIndicatorProps {
  score: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays review score of a critic.
 * @param {number} score Score value
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CriticReviewScoreIndicator score={5} />
 */
export function CriticReviewScoreIndicator(
  props: SpecificReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <ReviewScoreIndicator
      iconName="star"
      score={props.score}
      style={props.style}
      isLeft={true}
      iconStyle={styles.criticIcon}
    />
  );
}

/**
 * Displays review score of a regular user.
 * @param {number} score Score value
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <RegularReviewScoreIndicator score={5} />
 */
export function RegularReviewScoreIndicator(
  props: SpecificReviewScoreIndicatorProps,
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
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  scoreText: {
    color: colors.lightGrey,
    paddingTop: 4,
  },
  rightIcon: {
    flexDirection: 'row-reverse',
  },
  criticIcon: {
    fontSize: fontSizes.lg,
    color: colors.yellow,
  },
  regularIcon: {
    fontSize: fontSizes.lg,
    color: colors.darkBlue,
  },
});
