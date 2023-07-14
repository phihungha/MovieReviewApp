import React from 'react';
import {UserListStackNavigator} from '../navigators/UserListStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
import {UserListScreen} from './UserList/UserList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';
import {EditReviewScreen} from './CreateReview/EditReview';
import {ReviewBreakdownScreen} from './ReviewBreakdown/ReviewBreakdown';
import {stackNavHeaderOptions} from '../styles/nav-header';

export function UserListStackScreen(): React.JSX.Element {
  return (
    <UserListStackNavigator.Navigator>
      <UserListStackNavigator.Group screenOptions={stackNavHeaderOptions}>
        <UserListStackNavigator.Screen
          name="UserList"
          options={{headerShown: false}}
          component={UserListScreen}
        />
        <UserListStackNavigator.Screen
          name="MovieDetails"
          options={{headerTitle: ''}}
          component={MovieDetailsScreen}
        />
        <UserListStackNavigator.Screen
          name="MovieReviewList"
          component={MovieReviewListScreen}
        />
        <UserListStackNavigator.Screen
          name="ReviewBreakdown"
          options={{title: 'Review breakdown'}}
          component={ReviewBreakdownScreen}
        />
        <UserListStackNavigator.Screen
          name="CreateReview"
          options={{title: 'Create a review'}}
          component={CreateReviewScreen}
        />
        <UserListStackNavigator.Screen
          name="EditReview"
          options={{title: 'Edit review'}}
          component={EditReviewScreen}
        />
        <UserListStackNavigator.Screen
          name="ReviewDetails"
          options={{title: 'Review details'}}
          component={ReviewDetailsScreen}
        />
        <UserListStackNavigator.Screen
          name="UserDetails"
          options={{headerTitle: ''}}
          component={UserDetailsScreen}
        />
        <UserListStackNavigator.Screen
          name="UserWatchedList"
          options={{title: 'Watched movies'}}
          component={UserWatchedListScreen}
        />
        <UserListStackNavigator.Screen
          name="UserReviewList"
          options={{title: 'Reviews'}}
          component={UserReviewListScreen}
        />
        <UserListStackNavigator.Screen
          name="UserThankedReviewList"
          options={{title: 'Thanked reviews'}}
          component={UserThankedReviewListScreen}
        />
      </UserListStackNavigator.Group>
    </UserListStackNavigator.Navigator>
  );
}
