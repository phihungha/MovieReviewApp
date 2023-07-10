import React from 'react';
import {MoviesListStackNavigator} from '../navigators/MoviesListStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MoviesListScreen} from './MoviesList/MoviesList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';

export function MovieListStackScreen(): React.JSX.Element {
  return (
    <MoviesListStackNavigator.Navigator>
      <MoviesListStackNavigator.Screen
        name="MoviesList"
        component={MoviesListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieDetails"
        options={{headerShown: false}}
        component={MovieDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="CreateReview"
        options={{title: 'Create a review'}}
        component={CreateReviewScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="ReviewDetails"
        options={{title: 'Review details'}}
        component={ReviewDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserWatchedList"
        options={{title: 'Watched movies'}}
        component={UserWatchedListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserReviewList"
        options={{title: 'Reviews'}}
        component={UserReviewListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserThankedReviewList"
        options={{title: 'Thanked reviews'}}
        component={UserThankedReviewListScreen}
      />
    </MoviesListStackNavigator.Navigator>
  );
}
