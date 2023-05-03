import React from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import {MovieListScreen} from './MovieList';
import {MyAccountScreen} from './MyAccount';
import {HomeScreen} from './Home';

export function MainScreen(): JSX.Element {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen
        name="Home"
        options={{title: 'Home'}}
        component={HomeScreen}
      />
      <MainTabNavigator.Screen
        name="MovieList"
        options={{title: 'Movies'}}
        component={MovieListScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccount"
        options={{title: 'Account'}}
        component={MyAccountScreen}
      />
    </MainTabNavigator.Navigator>
  );
}
