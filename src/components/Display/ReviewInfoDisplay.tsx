import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {SubtitleText} from '../Text/SubtitleText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {TitleText} from '../Text/TitleText';

export interface ReviewInfoDisplayProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays info of a review.
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function ReviewInfoDisplay(props: ReviewInfoDisplayProps): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <TitleText>Review title</TitleText>
      <SubtitleText>15/5/2023</SubtitleText>
      <CriticReviewScoreIndicator score={8} />
      <RegularText>
        Lorem ipsum dolor sit amunt ut l, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
        sit........
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
    gap: 5,
  },
});
