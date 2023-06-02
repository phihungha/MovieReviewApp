import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewListItem} from '../Items/ReviewListItem';
import {HorizontalAuthorDisplay} from '../Display/HorizontalAuthorDisplay';
import colors from '../../styles/colors';

export function CommentListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <HorizontalAuthorDisplay />
      </View>

      <View style={styles.padding}>
        <ReviewListItem />
      </View>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  padding:{
    padding: 2
  }
});
