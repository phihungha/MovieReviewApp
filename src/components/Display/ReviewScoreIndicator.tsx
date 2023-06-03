import {Text} from '@rneui/themed';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSizes} from '../../styles/typography';
import colors from '../../styles/colors';

export interface GenericReviewScoreIndicatorProps {
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
 * @param {StyleProp<ViewStyle>?} style Style
 * @param {StyleProp<TextStyle>?} iconStyle Style of icon
 * @param {StyleProp<ViewStyle>?} textStyle Style of score value
 */
export function ReviewScoreIndicator(props: GenericReviewScoreIndicatorProps) {
  return (
    <View
      style={[
        styles.container,
        props.isLeft ? {} : styles.rightIcon,
        props.style,
      ]}>
      <Icon
        name={props.iconName}
        style={[styles.defaultIcon, props.iconStyle]}
      />
      <Text style={[styles.scoreText, props.textStyle]}>{props.score}</Text>
    </View>
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
  defaultIcon: {
    fontSize: fontSizes.lg,
    color: colors.darkBlue,
  },
});
