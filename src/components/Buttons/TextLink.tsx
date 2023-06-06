import React from 'react';
import {Pressable, StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from '../Text/RegularText';

interface TextLinkProps {
  text: string;
  textLink: string;
  style?: StyleProp<TextStyle>;
  onClicked?: () => void;
}

/**
 *  A line text, with pressable text
 *  @param {string} text normal text
 *  @param {string} textLink pressable text
 *  @param {style} StyleProp<TextStyle> style
 *  @param {()=>void} onClicked action clicked on textLink
 *
 *  */
export function TextLink(props: TextLinkProps): JSX.Element {
  return (
    <View style={[styles.textContainer, props.style]}>
      <RegularText style={styles.text}>{props.text}</RegularText>

      <Pressable onPress={props.onClicked}>
        <RegularText style={styles.linkText}>{props.textLink}</RegularText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.lightGrey,
  },
  linkText: {
    color: colors.darkBlue,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
