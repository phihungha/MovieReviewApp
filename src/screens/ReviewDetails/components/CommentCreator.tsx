import {StyleSheet, View} from 'react-native';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {Button, Input} from '@rneui/themed';
import {useState} from 'react';
import colors from '../../../styles/colors';
import React from 'react';

export interface CommentCreatorProps {
  reviewId?: string | null;
  viewerAvatar?: string | null;
}

export function CommentCreator(props: CommentCreatorProps) {
  const [content, setContent] = useState('');

  const onCommentSend = () => {
    console.log('send comment');
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
});
