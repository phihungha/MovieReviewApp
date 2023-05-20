import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import {ChildrenOnlyProps} from '../../props/ChildrenOnlyProps';
import colors from '../../styles/colors';

export function RegularText(props: ChildrenOnlyProps): JSX.Element {
  return <Text style={regularStyles.text}>{props.children}</Text>;
}

const regularStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    color: colors.white,
  },
});
