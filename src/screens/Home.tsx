import React from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserReviewsList} from './UserReviewsList';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsList} from './UserLikedCommentsList';
import { MovieGridItem } from '../components/Items/MovieGridItem';

export function HomeScreen(): JSX.Element {
  return <>
  <MovieGridItem></MovieGridItem>
  </>;
}

export function HomeStackScreen(): JSX.Element {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <HomeStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsList}
      />
      <HomeStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsList}
      />
    </HomeStackNavigator.Navigator>
  );
}
