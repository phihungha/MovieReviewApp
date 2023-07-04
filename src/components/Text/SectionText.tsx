import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import {TextProps} from '../../props/TextProps';
import colors from '../../styles/colors';

export function SectionText(props: TextProps): JSX.Element {
  return (
    <Text style={[sectionStyles.text, props.style]}>{props.children}</Text>
  );
}

const sectionStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
