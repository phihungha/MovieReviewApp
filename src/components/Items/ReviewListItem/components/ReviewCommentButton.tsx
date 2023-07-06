import React from 'react';
import {CommentButton} from '../../../Buttons/CommentButton';

export function ReviewCommentButton(): JSX.Element {
  return <CommentButton onPress={() => console.log('test')} count={120} />;
}
