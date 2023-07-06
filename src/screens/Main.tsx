import React, {useContext} from 'react';
import {MainTabNavigator} from '../navigators/MainTabNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {PreloadedQueriesContext} from '../relay/PreloadedQueriesContext';
import {HomeStackScreen} from './HomeStack';
import {MovieListStackScreen} from './MovieListStack';
import {UserListStackScreen} from './UserListStack';
import {MyAccountStackScreen} from './MyAccountStack';

const MainTabScreenOptions = ({route}: any) => ({
  tabBarIcon: ({focused, color, size}: any) => {
    let icon;
    if (route.name === 'HomeStack') {
      icon = focused
        ? (icon = <Icon name="home" size={size} color={color} />)
        : (icon = <Icon name="home-outline" size={size} color={color} />);
    } else if (route.name === 'MoviesListStack') {
      icon = focused
        ? (icon = <Icon name="movie-open" size={size} color={color} />)
        : (icon = <Icon name="movie-open-outline" size={size} color={color} />);
    } else if (route.name === 'UsersListStack') {
      icon = focused
        ? (icon = <Icon name="account-group" size={size} color={color} />)
        : (icon = (
            <Icon name="account-group-outline" size={size} color={color} />
          ));
    } else if (route.name === 'MyAccountStack') {
      icon = focused
        ? (icon = <Icon name="account" size={size} color={color} />)
        : (icon = <Icon name="account-outline" size={size} color={color} />);
    }
    return icon;
  },
  tabBarStyle: {
    backgroundColor: colors.mediumBlack,
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.lightGrey,
  headerShown: false,
});

export function MainScreen(): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  return (
    <MainTabNavigator.Navigator screenOptions={MainTabScreenOptions}>
      <MainTabNavigator.Screen
        name="HomeStack"
        options={{title: 'Home'}}
        listeners={{
          tabPress: () => preloadedQueries?.Home.loadQuery({}),
          state: () => preloadedQueries?.Home.loadQuery({}),
        }}
        component={HomeStackScreen}
      />
      <MainTabNavigator.Screen
        name="MoviesListStack"
        options={{title: 'Movies'}}
        listeners={{
          tabPress: () => preloadedQueries?.MoviesList.loadQuery({}),
        }}
        component={MovieListStackScreen}
      />
      <MainTabNavigator.Screen
        name="UsersListStack"
        options={{title: 'Users'}}
        listeners={{
          tabPress: () => preloadedQueries?.UserList.loadQuery({}),
          state: () => preloadedQueries?.UserList.loadQuery({}),
        }}
        component={UserListStackScreen}
      />
      <MainTabNavigator.Screen
        name="MyAccountStack"
        options={{title: 'Account'}}
        component={MyAccountStackScreen}
      />
    </MainTabNavigator.Navigator>
  );
}
