import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';
import {ItemTitleText} from '../Text/ItemTitleText';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';
import {StandardAvatar} from './StandardAvatar';

/**
 * Display basic profile info (image, name, role) of a user, crew member,...
 * @param {string?} imageUrl Image URL
 * @param {string?} name Name
 * @param {string?} role Role (user type, crew role,...)
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function VerticalProfileDisplay(
  props: ProfileDisplayProps,
): React.JSX.Element {
  return (
    <View style={[styles.container, props.style]}>
      <StandardAvatar uri={props.imageUrl} />
      <View style={styles.infoContainer}>
        {props.name ? (
          <ItemTitleText style={styles.text}>{props.name}</ItemTitleText>
        ) : undefined}
        {props.name ? (
          <ItemSubtitleText style={styles.text}>{props.role}</ItemSubtitleText>
        ) : undefined}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  infoContainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
