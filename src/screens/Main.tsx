import React from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import {MoviesListScreen, MoviesListStackScreen} from './MoviesList';
import {MyAccountScreen} from './MyAccount';
import {HomeStackScreen} from './Home';

export function MainScreen(): JSX.Element {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen
        name="Home"
        options={{title: 'Home'}}
        component={HomeStackScreen}
      />
      <MainTabNavigator.Screen
        name="MovieList"
        options={{title: 'Movies'}}
        component={MoviesListStackScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccount"
        options={{title: 'Account'}}
        component={MyAccountScreen}
      />
    </MainTabNavigator.Navigator>
  );
}
