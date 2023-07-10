import React from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {HomeScreen} from './Home/Home';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserLikedCommentsListScreen} from './UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';

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
        name="UserReviewList"
        component={UserReviewListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserThankedReviewList"
        component={UserLikedCommentsListScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}
