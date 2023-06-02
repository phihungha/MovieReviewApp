import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';

export function HorizontalAuthorDisplay(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{padding: 2, paddingRight: 10}}>
        <Avatar
          size={60}
          rounded
          source={{
            uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
          }}
        />
      </View>

    <View style={{ padding: 2, paddingLeft: 10 }}>
        <TitleText>John</TitleText>
        <RegularText>Director</RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    paddingEnd: 1,
  },
});
