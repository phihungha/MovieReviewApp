import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VeryBigTitleText} from '../Text/VeryBigTitleText';
import {TextProps} from '../../props/ChildrenOnlyProps';

/**
 *  A block of VeryBigTitleText for to make it center screen, only using for SignIn, SignUp Screen
 *
 *  */
export function TitleBlock(props: TextProps): JSX.Element {
  return (
    <View style={[styles.textContainer, props.style]}>
      <VeryBigTitleText>{props.children}</VeryBigTitleText>
    </View>
  );
}
const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 40,
  },
});
