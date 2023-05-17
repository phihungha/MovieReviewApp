import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ActionCb} from '../types/ActionCb';
import {CountButton} from './IconButton';

interface LikeButtonProps {
  count: number;
  isActive: boolean;
  onPress: ActionCb;
  style?: StyleProp<ViewStyle>;
}

/**
 * Like button.
 * @param {number} count Number of likes
 * @param {ActionCb} onPress Action on press
 * @param {boolean} isActive True if like button is active
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <LikeButton isActive={true} likeCount={120} />
 */
export function LikeButton(props: LikeButtonProps): JSX.Element {
  return (
    <CountButton
      iconName="thumb-up"
      text={props.count > 1 ? 'like' : 'likes'}
      count={props.count}
      onPress={props.onPress}
      isActive={props.isActive}
      style={props.style}
    />
  );
}
