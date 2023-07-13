import {graphql} from 'relay-runtime';
import {CommentEditor$key} from './__generated__/CommentEditor.graphql';
import {useFragment, useMutation} from 'react-relay';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Input} from '@rneui/themed';
import colors from '../../../../styles/colors';
import {ActionCb} from '../../../../types/ActionCb';
import {pressableRippleConfig} from '../../../../styles/pressable-ripple';
import {fontSizes} from '../../../../styles/typography';
import type {CommentEditorMutation as CommentEditorMutationType} from './__generated__/CommentEditorMutation.graphql';

const CommentEditorFragment = graphql`
  fragment CommentEditor on Comment {
    id
    content
    author {
      id
      avatarUrl
      name
    }
    postTime
  }
`;

const CommentEditorMutation = graphql`
  mutation CommentEditorMutation($id: ID!, $input: EditCommentInput!) {
    editComment(id: $id, input: $input) {
      ... on MutationEditCommentSuccess {
        data {
          id
          ...CommentEditor
          ...CommentListItem
        }
      }
    }
  }
`;

export interface CommentEditorProps {
  comment: CommentEditor$key | null;
  onDisable?: ActionCb;
}

export function CommentEditor(props: CommentEditorProps) {
  const data = useFragment(CommentEditorFragment, props.comment);

  const [content, setContent] = useState<string | undefined>(undefined);
  useEffect(() => setContent(data?.content), [data]);

  const [commitMutation] = useMutation<CommentEditorMutationType>(
    CommentEditorMutation,
  );

  const updateComment = () => {
    if (!data) {
      return props.onDisable?.();
    }

    commitMutation({
      variables: {
        id: data.id,
        input: {
          content,
        },
      },
      optimisticResponse: {
        editComment: {
          __typename: 'MutationEditCommentSuccess',
          data: {
            id: data.id,
            content,
            author: {
              id: data.author.id,
              avatarUrl: data.author.avatarUrl,
              name: data.author.name,
            },
            postTime: data.postTime,
          },
        },
      },
    });
    props.onDisable?.();
  };

  return (
    <View style={styles.container}>
      <Input
        value={content}
        onChangeText={setContent}
        multiline
        inputContainerStyle={styles.inputContainer}
        renderErrorMessage={false}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={props.onDisable}
          android_ripple={pressableRippleConfig}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={updateComment}
          android_ripple={pressableRippleConfig}>
          <Text style={styles.buttonText}>Ok</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  inputContainer: {
    paddingTop: 0,
    paddingHorizontal: 7,
    backgroundColor: colors.darkBlack,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    justifyContent: 'space-between',
  },
  buttonText: {
    color: colors.blue,
    fontSize: fontSizes.md,
  },
});
