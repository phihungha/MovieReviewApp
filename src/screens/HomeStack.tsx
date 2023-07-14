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
import {EditReviewScreen} from './CreateReview/EditReview';
import {ReviewBreakdownScreen} from './ReviewBreakdown/ReviewBreakdown';
import {stackNavHeaderOptions} from '../styles/nav-header';

export function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Group screenOptions={stackNavHeaderOptions}>
        <HomeStackNavigator.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <HomeStackNavigator.Screen
          name="MovieDetails"
          options={{headerTitle: ''}}
          component={MovieDetailsScreen}
        />
        <HomeStackNavigator.Screen
          name="MovieReviewList"
          options={{headerShown: false}}
          component={MovieReviewListScreen}
        />
        <HomeStackNavigator.Screen
          name="ReviewBreakdown"
          options={{title: 'Review breakdown'}}
          component={ReviewBreakdownScreen}
        />
        <HomeStackNavigator.Screen
          name="CreateReview"
          options={{title: 'Create a review'}}
          component={CreateReviewScreen}
        />
        <HomeStackNavigator.Screen
          name="EditReview"
          options={{title: 'Edit review'}}
          component={EditReviewScreen}
        />
        <HomeStackNavigator.Screen
          name="ReviewDetails"
          options={{title: ''}}
          component={ReviewDetailsScreen}
        />
        <HomeStackNavigator.Screen
          name="UserDetails"
          options={{headerTitle: ''}}
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
      </HomeStackNavigator.Group>
    </HomeStackNavigator.Navigator>
  );
}
