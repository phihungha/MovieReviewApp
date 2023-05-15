import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {TextProps} from '../props/TextProps';
import {styles} from '../styles/styles';

export function SectionText(props: TextProps): JSX.Element {
  const styleText = StyleSheet.compose(styles.textDefault, sectionStyles.text);
  return <Text style={styleText}>{props.children}</Text>;
}

const sectionStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.xl,
  },
});
