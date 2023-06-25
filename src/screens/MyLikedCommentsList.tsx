import React from 'react';
import {ReviewListItem} from '../components/Items/ReviewListItem';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TitleText} from '../components/Text/TitleText';
import {FlatList} from 'react-native';

export function ItemSeparatorComponent({}: {navigation: any}): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView>
      <View style={styles.padding}>
        <TitleText>Recently Liked</TitleText>
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

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function MyLikedCommentsListScreen(): JSX.Element {
  return <></>;
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
