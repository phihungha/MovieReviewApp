import React from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {HomeScreen} from './Home/Home';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
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
        options={{title: 'Create a review'}}
        component={CreateReviewScreen}
      />
      <HomeStackNavigator.Screen
        name="ReviewDetails"
        options={{title: 'Review details'}}
        component={ReviewDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserDetails"
        options={{headerShown: false}}
        component={UserDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserWatchedList"
        options={{title: 'Watched movies'}}
        component={UserWatchedListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserReviewList"
        options={{title: 'Reviews'}}
        component={UserReviewListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserThankedReviewList"
        options={{title: 'Thanked reviews'}}
        component={UserThankedReviewListScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}
