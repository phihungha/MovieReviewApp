import React from 'react';
import {CountButton} from './CountButton';
import {ActionCb} from '../../types/ActionCb';
import {StyleProp, ViewStyle} from 'react-native';

interface CommentButtonProps {
  count?: number | null;
  onPress?: ActionCb;
  style?: StyleProp<ViewStyle>;
}

/**
 * Comment button.
 * @param {number | null | undefined} count Number of comments
 * @param {ActionCb} onPress Action on press
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CommentButton count={120} />
 */
export function CommentButton(props: CommentButtonProps): JSX.Element {
  return (
    <CountButton
      iconName="comment"
      text={props.count && props.count > 1 ? 'comments' : 'comment'}
      count={props.count}
      onPress={props.onPress}
      style={props.style}
    />
  );
}
