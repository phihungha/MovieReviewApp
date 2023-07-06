import {StyleSheet, View} from 'react-native';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {Input} from '@rneui/themed';
import {useState} from 'react';

export function CommentCreator() {
  const [content, setContent] = useState('');
  return (
    <View style={styles.container}>
      <StandardAvatar uri="https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg" />
      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Write a Comment"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
