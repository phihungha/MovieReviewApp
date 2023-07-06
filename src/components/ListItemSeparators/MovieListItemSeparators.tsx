import React from 'react';
import {StyleSheet, View} from 'react-native';

export function VerticalListItemSeparator(): JSX.Element {
  return <View style={styles.verticalSeparator} />;
}

export function HorizontalListItemSeparator(): JSX.Element {
  return <View style={styles.horizontalSeparator} />;
}

const styles = StyleSheet.create({
  horizontalSeparator: {
    width: 5,
  },
  verticalSeparator: {
    height: 5,
  },
});
