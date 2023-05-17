import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/styles';
import {fontSizes} from '../styles/typography';

interface CommentButtonProps {
  commentCount: number;
}

/**
 * Comment button.
 * @param {number} commentCount Number of comments
 * @example
 * <CommentButton commentCount={120} />
 */
export function CommentButton(props: CommentButtonProps): JSX.Element {
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
      <Text style={styleText}>{props.commentCount}</Text>
      <Icon style={styleIcon} name="comment" />
      <Text style={styleText}>Comment</Text>
    </TouchableOpacity>
  );
}

const commentButtonStyles = StyleSheet.create({
  fontSize16: {
    fontSize: fontSizes.lg,
  },
  marginEnd8: {
    marginEnd: 8,
  },
});
