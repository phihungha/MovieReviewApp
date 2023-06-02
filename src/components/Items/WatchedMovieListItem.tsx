import React from 'react';
import {StyleSheet,View} from 'react-native';
import { TitleText } from '../Text/TitleText';
import { RegularText } from '../Text/RegularText';
import { Avatar } from '@rneui/themed';
import colors from '../../styles/colors';

export function WatchedMovieListItem(): JSX.Element {
  return <View style={styles.container}>
    <View style={styles.row}>
    <Avatar
    size={60}
    rounded
    source={{uri:'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg' }}
    />
    <View style={{ padding: 10 }}>
    <TitleText>John Wick</TitleText> 
    </View>  
  </View>
  <View style={styles.rowTime}>
    <View style={{ padding: 10 }}>
      <RegularText>11:23 AM</RegularText> 
    </View>
    <View style={{ padding: 10 }}>
      <RegularText>April 24, 2023</RegularText> 
    </View>    
  </View>
</View>;
}

const styles = StyleSheet.create({
  container: {
    width: 340, 
    height: 120, 
    padding: 10,
    borderRadius: 5, 
    backgroundColor: colors.mediumBlack
  },
  rowTime: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'flex-end',
    padding: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    padding: 5
  },
});
