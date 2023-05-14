import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
    <TouchableOpacity style={styles.container}>
      <Text style={styles.subText}>{textProps.text}</Text>
      <Icon style={styles.subTextIcon} name="comment" />
      <Text style={styles.subText}>Comment</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    width: 'auto',
  },
  subText: {
    color: colors.lightGrey,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    verticalAlign: 'middle',
  },
  subTextIcon: {
    color: colors.lightGrey,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    verticalAlign: 'middle',
  },
});
