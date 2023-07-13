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
  return <RegularText>{data?.content ?? 'N/A'}</RegularText>;
}
