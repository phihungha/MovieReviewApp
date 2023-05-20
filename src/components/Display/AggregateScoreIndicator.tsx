import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import colors from '../../styles/colors';
import {Text} from '@rneui/themed';
import {TitleText} from '../Text/TitleText';
import {ReviewScoreIndicator} from './ReviewScoreIndicator';

export interface GenericAggregateScoreIndicatorProps {
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
export function AggregateScoreIndicator(
  props: GenericAggregateScoreIndicatorProps,
) {
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
});
