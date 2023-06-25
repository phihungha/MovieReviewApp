import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TitleText} from '../components/Text/TitleText';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function CreateReviewScreen({}: {navigation: any}): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.padding}>
        <TitleText>Create review for</TitleText>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  MovieItem: {},
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
    height: 50,
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  text: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
