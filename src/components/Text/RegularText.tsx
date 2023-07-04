import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import colors from '../../styles/colors';

export function RegularText(props: TextProps): JSX.Element {
  return <Text style={[regularStyles.text, props.style]} {...props} />;
}

const regularStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    color: colors.white,
  },
});
