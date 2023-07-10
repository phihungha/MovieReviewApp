import React, {useContext} from 'react';
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
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../navigators/MainStackParams';

const UserListItemFragment = graphql`
  fragment UserListItem on User {
    id
    avatarUrl
    name
    userType
  }
`;

export interface UserListItemProps {
  user: UserListItem$key | null;
  onNavigate?: ActionCb | null;
  onPress?: ActionCb;
}

export function UserListItem(props: UserListItemProps): JSX.Element {
  const data = useFragment(UserListItemFragment, props.user);

  const preloadedQueries = useContext(PreloadedQueriesContext);
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const defaultOnPress = () => {
    if (props.onNavigate === null) {
      return;
    }

    if (data?.id) {
      preloadedQueries?.UserDetails.loadQuery({id: data.id});
    }

    props.onNavigate !== undefined
      ? props.onNavigate
      : navigation.navigate('UserDetails');
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
