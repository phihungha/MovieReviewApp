import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';

export function VerticalAuthorDisplay(): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar
        size={60}
        rounded
        source={{
          uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        }}
      />
      <View style={{padding: 2}}>
        <TitleText>John</TitleText>
      </View>
      <View style={{padding: 2}}>
        <RegularText>Director</RegularText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 135,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
