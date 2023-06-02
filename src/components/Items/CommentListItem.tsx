import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewListItem} from '../Items/ReviewListItem';
import {HorizontalAuthorDisplay} from '../Display/HorizontalAuthorDisplay';
import colors from '../../styles/colors';

export function CommentListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{padding: 2}}>
        <HorizontalAuthorDisplay />
      </View>

      <View style={{padding: 2}}>
        <ReviewListItem />
      </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
});
