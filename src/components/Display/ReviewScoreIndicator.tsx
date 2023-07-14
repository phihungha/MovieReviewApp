import {Text} from '@rneui/themed';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSizes} from '../../styles/typography';
import colors from '../../styles/colors';
import {getRoundedScore} from '../../utils/number-conversion';

export interface GenericReviewScoreIndicatorProps {
  iconName: string;
  score?: number | null;
  fullScore?: boolean;
  isRight?: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/**
 * Generic review score indicator.
 * @param {string} iconName Icon name
 * @param {number | null | undefined} score Score value
 * @param {fullScore?} boolean True if the score format is x/10
 * @param {isRight?} boolean True if icon is on the right of score value
 * @param {StyleProp<ViewStyle>?} style Style
 * @param {StyleProp<TextStyle>?} iconStyle Style of icon
 * @param {StyleProp<ViewStyle>?} textStyle Style of score value
 */
export function ReviewScoreIndicator(props: GenericReviewScoreIndicatorProps) {
  const roundedScore = props.score ? getRoundedScore(props.score) : undefined;
  return (
    <View
      style={[
        styles.container,
        props.isRight ? styles.rightIcon : {},
        props.style,
      ]}>
      <Icon
        name={props.iconName}
        style={[styles.defaultIcon, props.iconStyle]}
      />
      <Text style={[styles.scoreText, props.textStyle]}>
        {roundedScore ?? 'N/A'}
        {''}
        {props.fullScore ? ' / 10' : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreText: {
    paddingTop: 4,
  },
  rightIcon: {
    flexDirection: 'row-reverse',
  },
  defaultIcon: {
    fontSize: fontSizes.lg,
    color: colors.darkBlue,
  },
});
