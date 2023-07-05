import {Avatar, AvatarProps} from '@rneui/themed';

export type StandardAvatarProps = AvatarProps & {uri?: string | null};

export function StandardAvatar(props: StandardAvatarProps) {
  return (
    <Avatar
      size={60}
      rounded
      icon={{name: 'account'}}
      {...props}
      source={props.uri ? {uri: props.uri} : undefined}
    />
  );
}
