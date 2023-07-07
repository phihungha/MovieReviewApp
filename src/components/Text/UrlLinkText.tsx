import React from 'react';
import {StyleSheet, TextProps, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from './RegularText';
import {ActionCb} from '../../types/ActionCb';

interface UrlLinkTextProps {
  isVisited: boolean;
  onPressLink: ActionCb;
}

export function UrlLinkText(props: TextProps & UrlLinkTextProps): JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPressLink}>
      <RegularText
        {...props}
        style={[
          styles.text,
          props.isVisited ? styles.visited : styles.standard,
          props.style,
        ]}
      />
    </TouchableOpacity>
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
