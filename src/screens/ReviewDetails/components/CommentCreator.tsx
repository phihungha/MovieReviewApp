import {StyleSheet, View} from 'react-native';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {Input} from '@rneui/themed';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../styles/colors';
import {Pressable} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable-ripple';
import {ActionCb} from '../../../types/ActionCb';

type SendCommentProps = {
  onPressSendComment: ActionCb;
};

function SendCommentIconButton(props: SendCommentProps) {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressSendComment}>
      <Icon name="send" size={20} color={colors.white} />
    </Pressable>
  );
}

export function CommentCreator() {
  const [content, setContent] = useState('');
  const onPressSendComment = () => {
    console.log('send comment');
  };
  return (
    <View style={styles.container}>
      <StandardAvatar uri="https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg" />
      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Write a comment..."
        containerStyle={{flex: 1}}
        inputContainerStyle={{paddingTop: 8}}
        renderErrorMessage={false}
        rightIcon={
          <SendCommentIconButton onPressSendComment={onPressSendComment} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 5,
  },
});
