import React from 'react';
import {CountButton} from './IconButton';
import {ActionCb} from '../types/ActionCb';
import {StyleProp, ViewStyle} from 'react-native';

interface CommentButtonProps {
  count: number;
  onPress: ActionCb;
  style?: StyleProp<ViewStyle>;
}

/**
 * Comment button.
 * @param {number} commentCount Number of comments
 * @param {ActionCb} onPress Action on press
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CommentButton count={120} />
 */
export function CommentButton(props: CommentButtonProps): JSX.Element {
  return (
    <CountButton
      iconName="comment"
      text={props.count > 1 ? 'comments' : 'comment'}
      count={props.count}
      onPress={props.onPress}
      style={props.style}
    />
  );
}
