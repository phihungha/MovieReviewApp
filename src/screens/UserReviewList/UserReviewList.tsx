import React, {Suspense, useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {UserListStackParams} from '../../navigators/UserListStackNavigator';
import type {UserReviewListQuery as UserReviewListQueryType} from './__generated__/UserReviewListQuery.graphql';
import {AllUserReviewList} from './components/AllUserReviewList';

export const UserReviewListQuery = graphql`
  query UserReviewListQuery($id: ID!) {
    user(id: $id) {
      name
      ...AllUserReviewList
    }
  }
`;

type UserReviewListScreenProps = NativeStackScreenProps<
  UserListStackParams,
  'UserReviewList'
>;

export function UserReviewListScreen(props: UserReviewListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.UserReviewList.queryRef) {
    return <></>;
  }
  return <UserReviewListScreenWithData {...props} />;
}

function UserReviewListScreenWithData({
  navigation,
  route,
}: UserReviewListScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<UserReviewListQueryType>(
    UserReviewListQuery,
    preloadedQueries!.UserReviewList.queryRef!,
  );

  const isPersonal = route.params.isPersonal;
  useEffect(() =>
    navigation.setOptions({
      title: isPersonal ? 'My reviews' : `Reviews of ${data.user?.name}`,
    }),
  );

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllUserReviewList user={data.user} />
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
