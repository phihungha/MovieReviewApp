import React from 'react';
import {Pressable, StyleSheet, TextProps} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from './RegularText';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';

type UrlLinkTextProps = TextProps & {
  isVisited: boolean;
  onPressLink: ActionCb;
};

export function UrlLinkText(props: UrlLinkTextProps): JSX.Element {
  return (
    <Pressable
      onPress={props.onPressLink}
      android_ripple={pressableRippleConfig}>
      <RegularText
        {...props}
        style={[
          styles.text,
          props.isVisited ? styles.visited : styles.standard,
          props.style,
        ]}
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
