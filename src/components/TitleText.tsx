import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {TextProps} from '../props/TextProps';
import {styles} from '../styles/styles';

export function TitleText(props: TextProps): JSX.Element {
  const styleText = StyleSheet.compose(styles.textDefault, titleStyles.text);
  return <Text style={styleText}>{props.children}</Text>;
}

const titleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.lg,
  },
});
