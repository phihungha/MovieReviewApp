import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {TextProps} from '../props/TextProps';
import {fontSizes, fonts} from '../styles/typography';

/**
 *  props:
 *    text: the comment count of the comments want to display
 *  using: <CommentButton text="commentCount"/>
 *
 */
export function CommentButton(textProps: TextProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>{textProps.text}</Text>
      <Icon style={styles.subText} name="comment" />
      <Text style={styles.subText}>Comment</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,

    justifyContent: 'center',
    alignItems: 'center',

    width: 'auto',
    height: 'auto',
  },
  subText: {
    color: colors.lightGrey,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    height: '100%',
    textAlign: 'center',
  },
});
