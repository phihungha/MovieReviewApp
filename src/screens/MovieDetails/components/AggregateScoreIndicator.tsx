import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import colors from '../../../styles/colors';
import {ReviewScoreIndicator} from '../../../components/Display/ReviewScoreIndicator';
import {SectionText} from '../../../components/Text/SectionText';
import {RegularText} from '../../../components/Text/RegularText';

export interface AggregateScoreIndicatorProps {
  iconName: string;
  title: string;
  isLeft?: boolean;
  score?: number | null;
  reviewCount?: number | null;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

/**
 * Generic aggregate score indicator.
 * @param {string} iconName Icon name
 * @param {string} title Title of the indicator.
 * @param {isLeft?} boolean True if component is set on the left
 * @param {number?} score Score value
 * @param {number?} reviewCount Number of reviews
 * @param {StyleProp<ViewStyle>?} style Style
 * @param {StyleProp<TextStyle>?} iconStyle Style of icon
 * @param {StyleProp<ViewStyle>?} textStyle Style of score value
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
        isRight={props.isLeft ?? true}
        style={styles.scoreIndicator}
        iconStyle={props.iconStyle}
        textStyle={props.textStyle}
      />
      <SectionText>{props.title}</SectionText>
      <RegularText style={[styles.reviewCountText]}>
        {props.reviewCount ?? 'N/A'}{' '}
        {props.reviewCount && props.reviewCount > 1 ? 'reviews' : 'review'}
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 170,
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
  },
  reviewCountText: {
    color: colors.lightGrey,
  },
  leftAlignContainer: {
    alignItems: 'flex-end',
  },
  rightAlignContainer: {
    alignItems: 'flex-start',
  },
  scoreIndicator: {
    alignSelf: 'auto',
  },
});
