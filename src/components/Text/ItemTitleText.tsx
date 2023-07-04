import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import {TextProps} from '../../props/TextProps';
import colors from '../../styles/colors';

export function ItemTitleText(props: TextProps): JSX.Element {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.md,
    color: colors.white,
  },
});
