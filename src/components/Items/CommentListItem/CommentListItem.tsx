import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalProfileDisplay} from '../../Display/VerticalProfileDisplay';
import {CommentListItemMoreButton} from './components/CommentListItemMoreButton';
import {ItemTitleText} from '../../Text/ItemTitleText';
import {ItemSubtitleText} from '../../Text/ItemSubtitleText';
import colors from '../../../styles/colors';
import {graphql} from 'relay-runtime';
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
    lastUpdateTime
    ...CommentContent
    ...CommentEditor
  }
`;

const CommentListItemDeleteMutation = graphql`
  mutation CommentListItemDeleteMutation($id: ID!) {
    deleteComment(id: $id) {
      ... on MutationDeleteCommentSuccess {
        data {
          ...CommentListItem
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

  const [commitMutation] = useMutation<CommentListItemDeleteMutationType>(
    CommentListItemDeleteMutation,
  );

  function onCommentDelete() {
    if (reviewId) {
      commitMutation({
        variables: {
          id: data.id,
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
          <View style={styles.metaInfoContainer}>
            <ItemTitleText>{data?.author.name ?? 'N/A'}</ItemTitleText>
            <ItemSubtitleText>
              {dateToStandardDateTimeFormat(new Date(data?.postTime))}
            </ItemSubtitleText>
            {data?.lastUpdateTime && (
              <ItemSubtitleText>
                Last edit:{' '}
                {dateToStandardDateTimeFormat(new Date(data.lastUpdateTime))}
              </ItemSubtitleText>
            )}
          </View>

          {isEditMode ? (
            <CommentEditor
              comment={data}
              onDisable={() => setEditMode(false)}
            />
          ) : (
            <CommentContent comment={data} />
          )}
          {data?.isMine && (
            <CommentListItemMoreButton
              onOk={() => onCommentDelete()}
              onSelectedItem={i => i.title === 'edit' && setEditMode(true)}
            />
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
    gap: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  avatarContainer: {
    alignSelf: 'flex-start',
  },
  metaInfoContainer: {},
});
