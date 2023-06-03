import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SectionText} from '../Text/SectionText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';

export interface CommentInfoDisplayProps {
  style?: StyleProp<ViewStyle>;
}

export function CommentInfoDisplay(
  props: CommentInfoDisplayProps,
): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <SectionText>Name</SectionText>
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
