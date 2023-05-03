import React from 'react';
import {MoviesListStackNavigator} from '../navigators/MoviesListStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsList} from './UserLikedCommentsList';
import {UserReviewsList} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';

export function MoviesListScreen(): JSX.Element {
  return <></>;
}

export function MoviesListStackScreen(): JSX.Element {
  return (
    <MoviesListStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MoviesListStackNavigator.Screen
        name="MoviesList"
        component={MoviesListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsList}
      />
      <MoviesListStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsList}
      />
    </MoviesListStackNavigator.Navigator>
  );
}
