import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextProps} from '../props/TextProps';
import {styles} from '../styles/styles';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';

/**
 *  props:
 *    body: the comment count of the comments want to display
 *  using: <CommentButton>120</CommentButton>
 *
 */
export function CommentButton(textProps: TextProps): JSX.Element {
  const styleText = StyleSheet.compose(
    styles.subTextLikeComment,
    commentButtonStyles.marginEnd8,
  );
  const styleIcon = StyleSheet.flatten([
    styles.subTextLikeComment,
    commentButtonStyles.marginEnd8,
    commentButtonStyles.fontSize16,
  ]);
  return (
    <TouchableOpacity style={styles.containerMediumBlackCorner}>
      <Text style={styleText}>{textProps.children}</Text>
      <Icon style={styleIcon} name="comment" />
      <Text style={styleText}>Comment</Text>
    </TouchableOpacity>
  );
}

const commentButtonStyles = StyleSheet.create({
  fontSize16: {
    fontSize: fontSizes.lg,
  },
  marginStart4: {
    marginStart: 4,
  },
  marginEnd4: {
    marginEnd: 4,
  },
  marginEnd8: {
    marginEnd: 8,
  },
  marginBotton6: {
    marginBottom: 6,
  },
  colorPrimayBackground: {
    backgroundColor: colors.primary,
  },
  colorWhite: {
    color: colors.white,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});
