import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import colors from '../styles/colors';
import {TextProps} from '../props/TextProps';

export function TitleText(props: TextProps): JSX.Element {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
