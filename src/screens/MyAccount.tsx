import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsList} from './UserLikedCommentsList';
import {UserReviewsList} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import { CreateReviewScreen } from './CreateReview';

export function MyAccountScreen(): JSX.Element {
  return <></>;
}

export function MyAccountStackScreen(): JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MyAccountStackNavigator.Screen
        name="MyAccount"
        component={MyAccountScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="CreateReviewScreen"
        component={CreateReviewScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsList}
      />
      <MyAccountStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsList}
      />
    </MyAccountStackNavigator.Navigator>
  );
}
