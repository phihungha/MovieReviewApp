import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';

export function VerticalProfileDisplay(
  props: ProfileDisplayProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar size={60} rounded source={{uri: props.imageUrl}} />
      <View style={styles.padding}>
        <TitleText>{props.name}</TitleText>
      </View>
      <View style={styles.padding}>
        <RegularText>{props.role}</RegularText>
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
  padding: {
    padding: 2,
  },
});
