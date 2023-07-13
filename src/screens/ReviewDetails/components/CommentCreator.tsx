import {StyleSheet, View} from 'react-native';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {Button, Input} from '@rneui/themed';
import {useState} from 'react';
import colors from '../../../styles/colors';
import React from 'react';
import {ConnectionHandler, graphql} from 'relay-runtime';
import type {CommentCreatorMutation as CommentCreatorMutationType} from './__generated__/CommentCreatorMutation.graphql';
import {useMutation} from 'react-relay';

const CommentCreatorMutation = graphql`
  mutation CommentCreatorMutation(
    $input: CreateCommentInput!
    $connections: [ID!]!
  ) {
    createComment(input: $input) {
      ... on MutationCreateCommentSuccess {
        data
          @prependNode(connections: $connections, edgeTypeName: "CommentEdge") {
          ...CommentListItem
          review {
            ...ReviewCommentButton
          }
        }
      }
    }
  }
`;

export interface CommentCreatorProps {
  reviewId?: string | null;
  viewerAvatar?: string | null;
}

export function CommentCreator(props: CommentCreatorProps) {
  const [commitMutation, _] = useMutation<CommentCreatorMutationType>(
    CommentCreatorMutation,
  );

  const reviewId = props.reviewId;

  const [content, setContent] = useState('');

  const onCommentSend = () => {
    if (reviewId) {
      const commentListConnId = ConnectionHandler.getConnectionID(
        reviewId,
        'CommentListFragment_comments',
      );
      commitMutation({
        variables: {
          input: {
            reviewId: reviewId,
            content,
          },
          connections: [commentListConnId],
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <StandardAvatar uri={props.viewerAvatar} />
      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Write a comment..."
        multiline
        containerStyle={styles.inputOuterContainer}
        inputContainerStyle={styles.inputContainer}
        renderErrorMessage={false}
        rightIconContainerStyle={styles.sendIcon}
        rightIcon={
          <Button
            disabled={content.length < 1}
            disabledStyle={styles.sendButtonDisable}
            containerStyle={styles.sendButtonContainer}
            buttonStyle={styles.sendButton}
            onPress={onCommentSend}
            icon={{
              name: 'send',
              type: 'font-awesome',
              color: colors.white,
              size: 20,
            }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputOuterContainer: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: 5,
  },
  sendIcon: {marginTop: -4},
  sendButton: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  sendButtonContainer: {
    width: 60,
  },
  sendButtonDisable: {
    backgroundColor: 'transparent',
    opacity: 0.5,
  },
});
