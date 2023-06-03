import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';

/**
 * Display basic profile info (image, name, role) of a user, crew member,...
 * @param {string} imageUrl Image URL
 * @param {string?} name Name
 * @param {string?} role Role (user type, crew role,...)
 * @param {StyleProp<ViewStyle>?} style Style
 * @returns
 */
export function HorizontalProfileDisplay(
  props: ProfileDisplayProps,
): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <Avatar size={60} rounded source={{uri: props.imageUrl}} />
      <View>
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
    gap: 10,
  },
});
