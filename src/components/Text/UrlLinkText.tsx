import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from './RegularText';
import {pressableRippleConfig} from '../../styles/pressable-ripple';
import {TextProps} from '@rneui/themed';

type UrlLinkTextProps = TextProps;

export function UrlLinkText(props: UrlLinkTextProps): JSX.Element {
  return (
    <Pressable onPress={props.onPress} android_ripple={pressableRippleConfig}>
      <RegularText
        {...props}
        style={[styles.text, styles.standard, props.style]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
  },
  standard: {
    color: colors.standardLink,
  },
  visited: {
    color: colors.visitedLink,
  },
});
