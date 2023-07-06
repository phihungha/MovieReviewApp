import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ActionCb} from '../../types/ActionCb';
import {CountButton} from './CountButton';

interface LikeButtonProps {
  count?: number | null;
  isActive?: boolean | null;
  onPress?: ActionCb;
  style?: StyleProp<ViewStyle>;
}

/**
 * Like button.
 * @param {boolean | null | undefined} count Number of likes
 * @param {boolean | null | undefined} isActive True if like button is active
 * @param {ActionCb?} onPress Action on press
 * @param {StyleProp<ViewStyle>?} style Style
 * @example
 * <LikeButton isActive={true} likeCount={120} />
 */
export function LikeButton(props: LikeButtonProps): JSX.Element {
  return (
    <CountButton
      iconName="thumb-up"
      text={props.count && props.count > 1 ? 'likes' : 'like'}
      count={props.count}
      onPress={props.onPress}
      isActive={props.isActive}
      style={props.style}
    />
  );
}
