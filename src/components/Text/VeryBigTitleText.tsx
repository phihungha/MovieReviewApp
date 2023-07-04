import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import colors from '../../styles/colors';

export function VeryBigTitleText(props: TextProps): JSX.Element {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl2,
    color: colors.white,
  },
});
