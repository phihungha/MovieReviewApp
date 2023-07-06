import React from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {CreateReviewScreen} from './CreateReview';
import {HomeScreen} from './Home/Home';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';

export function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name="MovieDetails"
        options={{headerShown: false}}
        component={MovieDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
      />
      <HomeStackNavigator.Screen
        name="CreateReview"
        component={CreateReviewScreen}
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
        component={UserReviewsListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}
