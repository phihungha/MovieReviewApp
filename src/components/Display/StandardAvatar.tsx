import React from 'react';
import {Avatar, AvatarProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export type StandardAvatarProps = AvatarProps & {uri?: string | null};

export function StandardAvatar(props: StandardAvatarProps): React.JSX.Element {
  return (
    <Avatar
      containerStyle={styles.container}
      size={60}
      rounded
      icon={{name: 'account'}}
      {...props}
      source={props.uri ? {uri: props.uri} : undefined}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlack,
  },
});
