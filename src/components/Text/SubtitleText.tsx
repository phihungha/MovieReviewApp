import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, fonts} from '../../styles/typography';
import {ChildrenOnlyProps} from '../../props/ChildrenOnlyProps';
import colors from '../../styles/colors';

export function SubtitleText(props: ChildrenOnlyProps): JSX.Element {
  return <Text style={subtitleStyles.text}>{props.children}</Text>;
}

const subtitleStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
});
