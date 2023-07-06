import React from 'react';
import {Avatar, AvatarProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes} from '../../styles/typography';

export type StandardAvatarProps = AvatarProps & {uri?: string | null};

export function StandardAvatar(props: StandardAvatarProps): React.JSX.Element {
  return (
    <Avatar
      containerStyle={styles.container}
      titleStyle={styles.title}
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
  title: {
    fontSize: fontSizes.xl,
  },
});
