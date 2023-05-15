import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {TextProps} from '../props/TextProps';
import {styles} from '../styles/styles';

export function SubtitleText(props: TextProps): JSX.Element {
  const styleText = StyleSheet.compose(styles.textDefault, subtitleStyles.text);
  return <Text style={styleText}>{props.children}</Text>;
}

const subtitleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
  },
});
