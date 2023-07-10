import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {UsersListStackParams} from '../../navigators/UsersListStackNavigator';
import type {UserListQuery as UserListQueryType} from './__generated__/UserListQuery.graphql';
import {UserListHeader} from './components/UserListHeader';
import {AllUserList} from './components/AllUserList';

export const UserListQuery = graphql`
  query UserListQuery {
    ...AllUserList
  }
`;

type UserListScreenProps = NativeStackScreenProps<
  UsersListStackParams,
  'UserList'
>;

export function UserListScreen(props: UserListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.UserList.queryRef) {
    return <></>;
  }
  return <MoviesListScreenWithData {...props} />;
}

function MoviesListScreenWithData({
  navigation,
}: UserListScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<UserListQueryType>(
    UserListQuery,
    preloadedQueries!.UserList.queryRef!,
  );

  const [search, setSearch] = useState('');

  const customHeader = useCallback(
    () => <UserListHeader search={search} setSearch={setSearch} />,
    [search],
  );

  useEffect(() => navigation.setOptions({header: () => customHeader()}));

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllUserList nameContains={search} users={data} />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
});
