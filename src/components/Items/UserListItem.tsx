import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {UserListItem$key} from './__generated__/UserListItem.graphql';
import {StandardAvatar} from '../Display/StandardAvatar';
import {ItemTitleText} from '../Text/ItemTitleText';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';

const UserListItemFragment = graphql`
  fragment UserListItem on User {
    avatarUrl
    name
    userType
  }
`;

export interface UserListItemProps {
  user: UserListItem$key | null;
  onNavigate?: ActionCb;
  onPress?: ActionCb;
}

export function UserListItem(props: UserListItemProps): JSX.Element {
  const data = useFragment(UserListItemFragment, props.user);
  const defaultOnPress = () => {
    if (props.onNavigate) {
      props.onNavigate();
    }
  };
  const onPress = props.onPress ?? defaultOnPress;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentContainer}
        onPress={onPress}
        android_ripple={pressableRippleConfig}>
        <StandardAvatar uri={data?.avatarUrl} />
        <View style={styles.infoContainer}>
          <ItemTitleText>{data?.name}</ItemTitleText>
          <ItemSubtitleText>{data?.userType}</ItemSubtitleText>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  infoContainer: {
    gap: 3,
  },
  contentContainer: {
    padding: 10,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
