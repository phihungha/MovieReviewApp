import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProfileDisplayProps} from '../../props/ProfileDisplayProps';
import {ItemTitleText} from '../Text/ItemTitleText';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';
import {StandardAvatar} from './StandardAvatar';
import {getNameInitials} from '../../utils/name-format';

/**
 * Display basic profile info (image, name, role) of a user, crew member,...
 * @param {string?} imageUrl Image URL
 * @param {string?} name Name
 * @param {string?} role Role (user type, crew role,...)
 * @param {boolean?} nameInitialsAsPlaceholder Display name initials as placeholder
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function HorizontalProfileDisplay(
  props: ProfileDisplayProps,
): React.JSX.Element {
  const title = props.nameInitialsAsPlaceholder
    ? getNameInitials(props.name ?? '')
    : undefined;
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <StandardAvatar title={title} uri={props.imageUrl} />
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
