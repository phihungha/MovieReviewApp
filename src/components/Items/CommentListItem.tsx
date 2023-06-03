import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommentInfoDisplay} from '../Display/CommentInfoDisplay';
import {VerticalProfileDisplay} from '../Display/VerticalProfileDisplay';

/**
 * Item for list of review comments.
 */
export function CommentListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <VerticalProfileDisplay
        style={styles.avatarContainer}
        imageUrl="https://cinerate-movie-review.s3.amazonaws.com/public/userProfileImages/1.jpg"
      />
      <CommentInfoDisplay style={styles.infoContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    gap: 10,
  },
  infoContainer: {
    flex: 1,
  },
  avatarContainer: {
    justifyContent: 'flex-start',
  },
});
