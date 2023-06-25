import React from 'react';
import {ReviewListItem} from '../components/Items/ReviewListItem';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TitleText} from '../components/Text/TitleText';
import {FlatList} from 'react-native';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function UserReviewsListScreen(): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView>
      <View style={styles.padding}>
        <TitleText>Recently Reviewed</TitleText>
      </View>
      <FlatList
        style={styles.padding}
        data={arr}
        renderItem={ReviewListItem}
        ItemSeparatorComponent={HorizontalItemSeparator}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
});
