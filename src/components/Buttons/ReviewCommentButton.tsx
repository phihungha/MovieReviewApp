import React from 'react';
import {CommentButton} from './CommentButton';

export function ReviewCommentButton(): JSX.Element {
  return <CommentButton onPress={() => console.log('test')} count={120} />;
}
