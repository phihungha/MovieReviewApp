import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import colors from '../../styles/colors';

export function TitleText(props: TextProps): JSX.Element {
  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    color: colors.white,
  },
});
