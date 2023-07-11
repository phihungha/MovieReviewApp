import {createContext} from 'react';
import {HomeQuery} from '../screens/Home/Home';
import type {HomeQuery as HomeQueryType} from '../screens/Home/__generated__/HomeQuery.graphql';
import {GraphQLTaggedNode, OperationType} from 'relay-runtime';
import type {MovieDetailsQuery as MovieDetailsQueryType} from '../screens/MovieDetails/__generated__/MovieDetailsQuery.graphql';
import {MovieDetailsQuery} from '../screens/MovieDetails/MovieDetails';
import type {MoviesListQuery as MoviesListQueryType} from '../screens/MoviesList/__generated__/MoviesListQuery.graphql';
import {MoviesListQuery} from '../screens/MoviesList/MoviesList';
import type {MovieReviewListQuery as MovieReviewListQueryType} from '../screens/MovieReviewList/__generated__/MovieReviewListQuery.graphql';
import {MovieReviewListQuery} from '../screens/MovieReviewList/MovieReviewList';
import type {ReviewDetailsQuery as ReviewDetailsQueryType} from '../screens/ReviewDetails/__generated__/ReviewDetailsQuery.graphql';
import {ReviewDetailsQuery} from '../screens/ReviewDetails/ReviewDetails';
import type {UserListQuery as UserListQueryType} from '../screens/UserList/__generated__/UserListQuery.graphql';
import {UserListQuery} from '../screens/UserList/UserList';
import type {UserDetailsQuery as UserDetailsQueryType} from '../screens/UserDetails/__generated__/UserDetailsQuery.graphql';
import {UserDetailsQuery} from '../screens/UserDetails/UserDetails';
import type {UserReviewListQuery as UserReviewListQueryType} from '../screens/UserReviewList/__generated__/UserReviewListQuery.graphql';
import {UserReviewListQuery} from '../screens/UserReviewList/UserReviewList';
import {UserThankedReviewListQuery} from '../screens/UserThankedReviewList/UserThankedReviewList';
import type {UserThankedReviewListQuery as UserThankedReviewListQueryType} from '../screens/UserThankedReviewList/__generated__/UserThankedReviewListQuery.graphql';
import type {UserWatchedListQuery as UserWatchedListQueryType} from '../screens/UserWatchedList/__generated__/UserWatchedListQuery.graphql';
import {UserWatchedListQuery} from '../screens/UserWatchedList/UserWatchedList';
import {useQueryLoader} from 'react-relay';
import {MyAccountQuery} from '../screens/MyAccount/MyAccount';
import type {MyAccountQuery as MyAccountQueryType} from '../screens/MyAccount/__generated__/MyAccountQuery.graphql';
import {ReviewBreakdownQuery} from '../screens/ReviewBreakdown/ReviewBreakdown';
import type {ReviewBreakdownQuery as ReviewBreakdownQueryType} from '../screens/ReviewBreakdown/__generated__/ReviewBreakdownQuery.graphql';

export const PreloadedQueriesContext =
  createContext<PreloadedQueries>(undefined);

function usePreloadedQueryAsDict<T extends OperationType>(
  query: GraphQLTaggedNode,
) {
  const [queryRef, loadQuery] = useQueryLoader<T>(query);
  return {queryRef, loadQuery};
}

export function usePreloadedQueries() {
  return {
    Home: usePreloadedQueryAsDict<HomeQueryType>(HomeQuery),
    MoviesList: usePreloadedQueryAsDict<MoviesListQueryType>(MoviesListQuery),
    MovieDetails:
      usePreloadedQueryAsDict<MovieDetailsQueryType>(MovieDetailsQuery),
    MovieReviewList:
      usePreloadedQueryAsDict<MovieReviewListQueryType>(MovieReviewListQuery),
    ReviewDetails:
      usePreloadedQueryAsDict<ReviewDetailsQueryType>(ReviewDetailsQuery),
    UserList: usePreloadedQueryAsDict<UserListQueryType>(UserListQuery),
    UserDetails:
      usePreloadedQueryAsDict<UserDetailsQueryType>(UserDetailsQuery),
    UserReviewList:
      usePreloadedQueryAsDict<UserReviewListQueryType>(UserReviewListQuery),
    UserThankedReviewList:
      usePreloadedQueryAsDict<UserThankedReviewListQueryType>(
        UserThankedReviewListQuery,
      ),
    UserWatchedList:
      usePreloadedQueryAsDict<UserWatchedListQueryType>(UserWatchedListQuery),
    MyAccount: usePreloadedQueryAsDict<MyAccountQueryType>(MyAccountQuery),
    ReviewBreakdown:
      usePreloadedQueryAsDict<ReviewBreakdownQueryType>(ReviewBreakdownQuery),
  };
}

export type PreloadedQueries =
  | ReturnType<typeof usePreloadedQueries>
  | undefined;
