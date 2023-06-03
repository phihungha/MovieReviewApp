import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';
import colors from '../../styles/colors';

export function WatchedMovieListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={60}
          rounded
          source={{
            uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
          }}
        />
        <View style={styles.padding}>
          <TitleText>John Wick</TitleText>
          <RegularText>Watched on 15/5/2023</RegularText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  padding: {
    paddingLeft: 15,
  },
});
