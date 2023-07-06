import React, {useState} from 'react';
import {ReviewListItem} from '../../components/Items/ReviewListItem/ReviewListItem';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TitleText} from '../../components/Text/TitleText';
import {FlatList} from 'react-native';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {Input} from '@rneui/themed';
import {Image} from '@rneui/base';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function ReviewDetailsScreen(): JSX.Element {
  const [_, setComment] = useState('');
  const arr: number[] = [1];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.text}>
          <TitleText>Someone's Review</TitleText>
        </View>
      </View>
      <View style={styles.text}>
        <BigTitleText>Movie Name</BigTitleText>
      </View>
      <View style={styles.text}>
        <TitleText>Review Title</TitleText>
      </View>
      <FlatList
        style={styles.padding}
        data={arr}
        renderItem={() => <ReviewListItem review={null} />}
        ItemSeparatorComponent={HorizontalItemSeparator}
      />
      <View style={styles.commentContainer}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
          }}
          style={styles.avatar}
        />

        <View style={styles.commentInputContainer}>
          <Input
            placeholder="Write a Comment"
            onChangeText={value => setComment(value)}
          />
        </View>
      </View>
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
  text: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentInputContainer: {
    flex: 1,
  },
});
