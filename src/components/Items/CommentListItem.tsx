import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommentInfoDisplay} from '../Display/CommentInfoDisplay';
import {VerticalProfileDisplay} from '../Display/VerticalProfileDisplay';
import {ItemTitleOnly} from './BottomSheetListItem';
import {CommentListItemMoreButton} from '../Buttons/CommentListItemMoreButton';

/**
 * Item for list of review comments.
 */
export function CommentListItem(): JSX.Element {
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'hide':
        console.log('hide comment');
        break;
      case 'delete':
        console.log('delete comment');
        break;
      case 'report':
        console.log('report comment');
        break;
      case 'edit':
        console.log('edit comment');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <VerticalProfileDisplay
        style={styles.avatarContainer}
        imageUrl="https://cinerate-movie-review.s3.amazonaws.com/public/userProfileImages/1.jpg"
      />
      <CommentInfoDisplay style={styles.infoContainer} />
      <CommentListItemMoreButton onSelectedItem={onSelectedItem} />
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
