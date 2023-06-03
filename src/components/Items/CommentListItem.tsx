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
            uri: 'https://cinerate-movie-review.s3.amazonaws.com/public/userProfileImages/1.jpg',
          }}
        />
      </View>
      <CommentInfoDisplay style={styles.infoContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
});
