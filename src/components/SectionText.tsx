import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import colors from '../styles/colors';
import {TextProps} from '../props/TextProps';

/**
 *  props:
 *    text: the text want to display
 *  using: <SectionText text='aaaa'/>
 *
 */
export function SectionText(props: TextProps): JSX.Element {
  return <Text style={styles.text}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.xl,
    color: colors.white,
  },
});
