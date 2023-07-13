import {graphql} from 'relay-runtime';
import {CommentContent$key} from './__generated__/CommentContent.graphql';
import {useFragment} from 'react-relay';
import {RegularText} from '../../../Text/RegularText';

const CommentContentFragment = graphql`
  fragment CommentContent on Comment {
    content
  }
`;

export interface CommentContentProps {
  comment: CommentContent$key | null;
}

export function CommentContent({comment}: CommentContentProps) {
  const data = useFragment(CommentContentFragment, comment);
  const content = data?.content ?? 'N/A';
  return <RegularText>{content === '' ? '[Deleted]' : content}</RegularText>;
}
