import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ReviewInfoDisplay} from '../Display/ReviewInfoDisplay';
import {HorizontalAuthorDisplay} from '../Display/HorizontalAuthorDisplay';
import colors from '../../styles/colors';

export function ReviewListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <HorizontalAuthorDisplay />
      </View>

      <View style={styles.padding}>
        <ReviewInfoDisplay />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  padding: {
    padding: 2,
  },
});
