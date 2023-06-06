import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import {TextProps} from '../../props/ChildrenOnlyProps';
import colors from '../../styles/colors';

export function BigTitleText(props: TextProps): JSX.Element {
  return <Text style={[titleStyles.text, props.style]}>{props.children}</Text>;
}

const titleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    color: colors.white,
  },
});
