import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';
import {ItemTitleText} from '../Text/ItemTitleText';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';

/**
 * Display basic profile info (image, name, role) of a user, crew member,...
 * @param {string?} imageUrl Image URL
 * @param {string?} name Name
 * @param {string?} role Role (user type, crew role,...)
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function HorizontalProfileDisplay(
  props: ProfileDisplayProps,
): React.JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <Avatar size={60} rounded source={{uri: props.imageUrl ?? ''}} />
      <View>
        <ItemTitleText>{props.name}</ItemTitleText>
        <ItemSubtitleText>{props.role}</ItemSubtitleText>
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
