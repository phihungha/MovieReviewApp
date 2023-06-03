import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {TitleText} from '../Text/TitleText';

export interface CommentInfoDisplayProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays info of a comment.
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function CommentInfoDisplay(
  props: CommentInfoDisplayProps,
): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <TitleText>Name</TitleText>
      <RegularText>11:23 AM</RegularText>
      <RegularText>
        Lorem ipsum dolor sit amunt ut l, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
        sit........
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
});
