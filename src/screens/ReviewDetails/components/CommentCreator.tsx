import {StyleSheet, View} from 'react-native';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {Button, Input} from '@rneui/themed';
import {useState} from 'react';

export function CommentCreator() {
  const [content, setContent] = useState('');
  return (
    <View style={styles.container}>
      <StandardAvatar uri="https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg" />
      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Write a comment..."
      />
      <Button
        icon={{name: 'heartbeat', type: 'font-awesome'}}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  buttonContainer: {
    width: 40,
  },
  button: {
    padding: 0,
    margin: 0,
  },
});
