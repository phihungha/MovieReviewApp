import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommentInfoDisplay} from '../Display/CommentInfoDisplay';
import {Avatar} from '@rneui/themed';

export function CommentListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          size={50}
          rounded
          source={{
            uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
          }}
        />
      </View>

      <View style={styles.padding}>
        <CommentInfoDisplay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
  },
  padding: {
    padding: 2,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
});
