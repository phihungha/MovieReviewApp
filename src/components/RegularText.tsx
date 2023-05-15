import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {TextProps} from '../props/TextProps';
import {styles} from '../styles/styles';

export function RegularText(props: TextProps): JSX.Element {
  const styleText = StyleSheet.compose(styles.textDefault, regularStyles.text);
  return <Text style={styleText}>{props.children}</Text>;
}

const regularStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
  },
});
