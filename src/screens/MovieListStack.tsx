import React from 'react';
import {MoviesListStackNavigator} from '../navigators/MoviesListStackNavigator';
import {CreateReviewScreen} from './CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MoviesListScreen} from './MoviesList/MoviesList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';

export function MovieListStackScreen(): React.JSX.Element {
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
        name="CreateReview"
        component={CreateReviewScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
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
        component={UserReviewsListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </MoviesListStackNavigator.Navigator>
  );
}
