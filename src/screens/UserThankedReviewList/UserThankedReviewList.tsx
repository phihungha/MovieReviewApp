import React, {Suspense, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {UsersListStackParams} from '../../navigators/UsersListStackNavigator';
import type {UserThankedReviewListQuery as UserThankedReviewListQueryType} from './__generated__/UserThankedReviewListQuery.graphql';
import {AllUserThankedReviewList} from './components/AllUserThankedReviewList';

export const UserThankedReviewListQuery = graphql`
  query UserThankedReviewListQuery($id: ID!) {
    user(id: $id) {
      name
      ...AllUserThankedReviewList
    }
  }
`;

type UserThankedReviewListScreenProps = NativeStackScreenProps<
  UsersListStackParams,
  'UserThankedReviewList'
>;

export function UserThankedReviewListScreen(
  props: UserThankedReviewListScreenProps,
) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.UserThankedReviewList.queryRef) {
    return <></>;
  }
  return <UserThankedReviewList {...props} />;
}

function UserThankedReviewList({
  navigation,
}: UserThankedReviewListScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<UserThankedReviewListQueryType>(
    UserThankedReviewListQuery,
    preloadedQueries!.UserThankedReviewList.queryRef!,
  );

  useEffect(() =>
    navigation.setOptions({title: `Reviews ${data.user?.name} thanked`}),
  );

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllUserThankedReviewList user={data.user} />
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
