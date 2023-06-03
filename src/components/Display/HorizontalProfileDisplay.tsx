import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';

export function HorizontalProfileDisplay(
  props: ProfileDisplayProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <Avatar
          size={60}
          rounded
          source={{
            uri: props.imageUrl,
          }}
        />
      </View>

      <View style={styles.left}>
        <TitleText>{props.name}</TitleText>
        <RegularText>{props.role}</RegularText>
      </View>
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
  right: {
    padding: 2,
    paddingRight: 10,
  },
  left: {
    padding: 2,
    paddingLeft: 10,
  },
});
