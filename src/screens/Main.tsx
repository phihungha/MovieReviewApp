import React from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import {MoviesListStackScreen} from './MoviesList';
import {MyAccountStackScreen} from './MyAccount';
import {HomeStackScreen} from './Home';

export function MainScreen(): JSX.Element {
  return (
    <MainTabNavigator.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <MainTabNavigator.Screen
        name="HomeStack"
        options={{title: 'Home'}}
        component={HomeStackScreen}
      />
      <MainTabNavigator.Screen
        name="MoviesListStack"
        options={{title: 'Movies'}}
        component={MoviesListStackScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccountStack"
        options={{title: 'Account'}}
        component={MyAccountStackScreen}
      />
    </MainTabNavigator.Navigator>
  );
}
