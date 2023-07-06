import React from 'react';
import {LikeButton} from './LikeButton';

export function ReviewLikeButton(): JSX.Element {
  return (
    <LikeButton
      onPress={() => console.log('test')}
      isActive={true}
      count={120}
    />
  );
}
