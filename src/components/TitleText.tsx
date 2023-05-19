import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {ChildrenOnlyProps} from '../props/ChildrenOnlyProps';
import colors from '../styles/colors';

export function TitleText(props: ChildrenOnlyProps): JSX.Element {
  return <Text style={titleStyles.text}>{props.children}</Text>;
}

const titleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
