import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalProfileDisplay} from '../../Display/VerticalProfileDisplay';
import {ItemTitleOnly} from '../BottomSheetListItem';
import {CommentListItemMoreButton} from './components/CommentListItemMoreButton';
import {ItemTitleText} from '../../Text/ItemTitleText';
import {ItemSubtitleText} from '../../Text/ItemSubtitleText';
import colors from '../../../styles/colors';
import {ConnectionHandler, graphql} from 'relay-runtime';
import {CommentListItem$key} from './__generated__/CommentListItem.graphql';
import {useFragment, useMutation} from 'react-relay';
import {dateToStandardDateTimeFormat} from '../../../utils/time-conversion';
import {CommentEditor} from './components/CommentEditor';
import {CommentContent} from './components/CommentContent';
import type {CommentListItemDeleteMutation as CommentListItemDeleteMutationType} from './__generated__/CommentListItemDeleteMutation.graphql';

const CommentListItemFragment = graphql`
  fragment CommentListItem on Comment {
    id
    author {
      avatarUrl
      name
    }
    isMine
    postTime
    ...CommentContent
    ...CommentEditor
  }
`;

const CommentListItemDeleteMutation = graphql`
  mutation CommentListItemDeleteMutation($id: ID!, $connections: [ID!]!) {
    deleteComment(id: $id) {
      ... on MutationDeleteCommentSuccess {
        data {
          id @deleteEdge(connections: $connections)
          review {
            ...ReviewListItem
          }
        }
      }
    }
  }
`;

export interface CommentListItemProps {
  comment: CommentListItem$key | null;
}

/**
 * Item for list of review comments.
 */
export function CommentListItem({comment}: CommentListItemProps): JSX.Element {
  const data = useFragment(CommentListItemFragment, comment);
  const reviewId = data?.id;

  const [isEditMode, setEditMode] = useState(false);
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'delete':
        onCommentDelete();
        break;
      case 'edit':
        setEditMode(true);
        break;
    }
  };

  const [commitMutation] = useMutation<CommentListItemDeleteMutationType>(
    CommentListItemDeleteMutation,
  );

  // Call this to delete comment
  function onCommentDelete() {
    if (reviewId) {
      const commentListConnId = ConnectionHandler.getConnectionID(
        reviewId,
        'CommentListFragment_comments',
      );
      commitMutation({
        variables: {
          id: data.id,
          connections: [commentListConnId],
        },
      });
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <VerticalProfileDisplay
          style={styles.avatarContainer}
          imageUrl={data?.author.avatarUrl}
        />
        <View style={styles.infoContainer}>
          <ItemTitleText>{data?.author.name ?? 'N/A'}</ItemTitleText>
          <ItemSubtitleText>
            {dateToStandardDateTimeFormat(new Date(data?.postTime))}
          </ItemSubtitleText>
          {isEditMode ? (
            <CommentEditor
              comment={data}
              onDisable={() => setEditMode(false)}
            />
          ) : (
            <CommentContent comment={data} />
          )}
          {data?.isMine && (
            <CommentListItemMoreButton onSelectedItem={onSelectedItem} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  avatarContainer: {
    alignSelf: 'flex-start',
  },
  bottomSheet: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  editContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  input_containerStyle: {
    flex: 1,
  },
  input_inputContainerStyle: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  okCancelContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  okCancelText: {
    color: colors.blue,
  },
});
