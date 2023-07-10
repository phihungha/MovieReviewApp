import React from 'react';
import {UsersListStackNavigator} from '../navigators/UsersListStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserLikedCommentsListScreen} from './UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserListScreen} from './UserList/UserList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';

export function UserListStackScreen(): React.JSX.Element {
  return (
    <UsersListStackNavigator.Navigator>
      <UsersListStackNavigator.Screen
        name="UserList"
        component={UserListScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieDetails"
        options={{headerShown: false}}
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
        options={{headerShown: false}}
        component={UserDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserReviewList"
        component={UserReviewListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserThankedReviewList"
        component={UserLikedCommentsListScreen}
      />
    </UsersListStackNavigator.Navigator>
  );
}
