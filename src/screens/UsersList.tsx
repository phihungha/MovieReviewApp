import React from 'react';
import {UsersListStackNavigator} from '../navigators/UsersListStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import {CreateReviewScreen} from './CreateReview';

export function UsersListScreen(): JSX.Element {
  return <></>;
}

export function UsersListStackScreen(): JSX.Element {
  return (
    <UsersListStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <UsersListStackNavigator.Screen
        name="UsersList"
        component={UsersListScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="CreateReviewScreen"
        component={CreateReviewScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <UsersListStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </UsersListStackNavigator.Navigator>
  );
}
