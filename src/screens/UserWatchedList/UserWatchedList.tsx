import React, {Suspense, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {UsersListStackParams} from '../../navigators/UsersListStackNavigator';
import type {UserWatchedListQuery as UserWatchedListQueryType} from './__generated__/UserWatchedListQuery.graphql';
import {AllUserWatchedList} from './components/AllUserWatchedList';

export const UserWatchedListQuery = graphql`
  query UserWatchedListQuery($id: ID!) {
    user(id: $id) {
      name
      ...AllUserWatchedList
    }
  }
`;

type UserWatchedListScreenProps = NativeStackScreenProps<
  UsersListStackParams,
  'UserWatchedList'
>;

export function UserWatchedListScreen(props: UserWatchedListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.UserWatchedList.queryRef) {
    return <></>;
  }
  return <UserWatchedList {...props} />;
}

function UserWatchedList({
  navigation,
}: UserWatchedListScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<UserWatchedListQueryType>(
    UserWatchedListQuery,
    preloadedQueries!.UserWatchedList.queryRef!,
  );

  useEffect(() =>
    navigation.setOptions({title: `Reviews ${data.user?.name} thanked`}),
  );

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllUserWatchedList user={data.user} />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginVertical: 10,
  },
});
