import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MyAccountScreen} from './MyAccount';
import {MyReviewsListScreen} from './MyReviewsList';
import {MyWatchedListScreen} from './MyWatchedList';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';

export function MyAccountStackScreen(): React.JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator>
      <MyAccountStackNavigator.Screen
        name="MyAccount"
        options={{headerShown: false}}
        component={MyAccountScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieDetails"
        options={{headerShown: false}}
        component={MovieDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="CreateReview"
        component={CreateReviewScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewListScreen}
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
        component={UserReviewsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MyWatchedList"
        component={MyWatchedListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MyReviewsList"
        component={MyReviewsListScreen}
      />
    </MyAccountStackNavigator.Navigator>
  );
}
