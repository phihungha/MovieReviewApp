import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {CreateReviewScreen} from './CreateReview/CreateReview';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewListScreen} from './MovieReviewList/MovieReviewList';
import {MyAccountScreen} from './MyAccount/MyAccount';
import {ReviewDetailsScreen} from './ReviewDetails/ReviewDetails';
import {UserDetailsScreen} from './UserDetails/UserDetails';
import {UserThankedReviewListScreen} from './UserThankedReviewList/UserThankedReviewList';
import {UserWatchedListScreen} from './UserWatchedList/UserWatchedList';
import {UserReviewListScreen} from './UserReviewList/UserReviewList';
import {ManageAccountInfo} from './ManageAccountInfo/ManageAccountInfo';
import {defaultOptionHeader} from './Main';
import {EditReviewScreen} from './CreateReview/EditReview';

export function MyAccountStackScreen(): React.JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator>
      <MyAccountStackNavigator.Group screenOptions={defaultOptionHeader}>
        <MyAccountStackNavigator.Screen
          name="MyAccount"
          options={{headerShown: false}}
          component={MyAccountScreen}
        />
        <MyAccountStackNavigator.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="CreateReview"
          options={{title: 'Create a review'}}
          component={CreateReviewScreen}
        />
        <MyAccountStackNavigator.Screen
          name="MovieReviewList"
          component={MovieReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="ReviewDetails"
          options={{title: 'Review details'}}
          component={ReviewDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="EditReview"
          options={{title: 'Edit review'}}
          component={EditReviewScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserDetails"
          component={UserDetailsScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserWatchedList"
          options={{title: 'Watched movies'}}
          component={UserWatchedListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserReviewList"
          options={{title: 'Reviews'}}
          component={UserReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="UserThankedReviewList"
          options={{title: 'Thanked reviews'}}
          component={UserThankedReviewListScreen}
        />
        <MyAccountStackNavigator.Screen
          name="ManageAccountInfo"
          options={{headerShown: false, animation: 'slide_from_right'}}
          component={ManageAccountInfo}
        />
      </MyAccountStackNavigator.Group>
    </MyAccountStackNavigator.Navigator>
  );
}
