import React from 'react';
import {LikeButton} from '../../../Buttons/LikeButton';

export function ReviewLikeButton(): JSX.Element {
  return (
    <LikeButton
      onPress={() => console.log('test')}
      isActive={true}
      count={120}
    />
  );
}
