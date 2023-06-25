import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import colors from '../../styles/colors';
import {Image} from '@rneui/base';

export function UserListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        }}
      />
      <View style={styles.infoContainer}>
        <TitleText>John Wick</TitleText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
    width: '100%',
    marginHorizontal: 'auto',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingLeft: 15,
  },
});
