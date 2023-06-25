import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {TitleText} from '../components/Text/TitleText';
import {FlatList, Pressable} from 'react-native';
import {ReviewListItem} from '../components/Items/ReviewListItem';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export function MovieReviewsListScreen({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleText>Reviews of John Wick</TitleText>
      </View>
      <FlatList
        style={styles.padding}
        data={arr}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('ReviewDetails', item)}>
            <ReviewListItem />
          </Pressable>
        )}
        ItemSeparatorComponent={HorizontalItemSeparator}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
    height: 50,
    alignItems: 'flex-start',
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
