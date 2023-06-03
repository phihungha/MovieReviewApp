import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RegularText} from '../Text/RegularText';
import {Avatar} from '@rneui/themed';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';
import {TitleText} from '../Text/TitleText';

/**
 * Display basic profile info (image, name, role) of a user, crew member,...
 * @param {string} imageUrl Image URL
 * @param {string?} name Name
 * @param {string?} role Role (user type, crew role,...)
 * @param {StyleProp<ViewStyle>?} style Style
 * @returns
 */
export function VerticalProfileDisplay(
  props: ProfileDisplayProps,
): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <Avatar size={60} rounded source={{uri: props.imageUrl}} />
      <View style={styles.infoContainer}>
        {props.name ? <TitleText>{props.name}</TitleText> : null}
        {props.role ? <RegularText>{props.role}</RegularText> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  infoContainer: {
    alignItems: 'center',
  },
});
