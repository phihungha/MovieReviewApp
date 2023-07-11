import React from 'react';
import {UsersListStackNavigator} from '../navigators/UsersListStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
import {UserListScreen} from './UserList/UserList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';
import {defaultOptionHeader} from './Main';

export function UserListStackScreen(): React.JSX.Element {
  return (
    <UsersListStackNavigator.Navigator>
      <UsersListStackNavigator.Group screenOptions={defaultOptionHeader}>
        <UsersListStackNavigator.Screen
          name="UserList"
          component={UserListScreen}
        />
        <UsersListStackNavigator.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
        />
        <UsersListStackNavigator.Screen
          name="CreateReview"
          options={{title: 'Create a review'}}
          component={CreateReviewScreen}
        />
        <UsersListStackNavigator.Screen
          name="MovieReviewList"
          component={MovieReviewListScreen}
        />
        <UsersListStackNavigator.Screen
          name="ReviewDetails"
          options={{title: 'Review details'}}
          component={ReviewDetailsScreen}
        />
        <UsersListStackNavigator.Screen
          name="UserDetails"
          component={UserDetailsScreen}
        />
        <UsersListStackNavigator.Screen
          name="UserWatchedList"
          options={{title: 'Watched movies'}}
          component={UserWatchedListScreen}
        />
        <UsersListStackNavigator.Screen
          name="UserReviewList"
          options={{title: 'Reviews'}}
          component={UserReviewListScreen}
        />
        <UsersListStackNavigator.Screen
          name="UserThankedReviewList"
          options={{title: 'Thanked reviews'}}
          component={UserThankedReviewListScreen}
        />
      </UsersListStackNavigator.Group>
    </UsersListStackNavigator.Navigator>
  );
}
