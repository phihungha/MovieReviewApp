import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {TextProps} from '../props/TextProps';
import colors from '../styles/colors';

export function TitleText(props: TextProps): JSX.Element {
  return <Text style={titleStyles.text}>{props.children}</Text>;
}

const titleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
