import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import colors from '../../styles/colors';

export function SubtitleText(props: TextProps): JSX.Element {
  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
