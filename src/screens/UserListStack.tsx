import React from 'react';
import {UsersListStackNavigator} from '../navigators/UsersListStackNavigator';
import {CreateReviewScreen} from './CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import {UsersListScreen} from './UsersList';

export function UserListStackScreen(): React.JSX.Element {
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
        name="CreateReview"
        component={CreateReviewScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
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
