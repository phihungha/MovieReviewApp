import React from 'react';
import environment from './relay/environment';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {
  GraphQLTaggedNode,
  RelayEnvironmentProvider,
  useQueryLoader,
} from 'react-relay';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {SignUpScreen} from './screens/SignUp';
import {LoginScreen} from './screens/Login';
import {MainScreen} from './screens/Main';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './styles/theme';
import colors from './styles/colors';
import {PreloadedQueriesContext} from './relay/PreloadedQueriesContext';
import {HomeQuery} from './screens/Home/Home';
import type {HomeQuery as HomeQueryType} from './screens/Home/__generated__/HomeQuery.graphql';
import {OperationType} from 'relay-runtime';
import type {MovieDetailsQuery as MovieDetailsQueryType} from './screens/MovieDetails/__generated__/MovieDetailsQuery.graphql';
import {MovieDetailsQuery} from './screens/MovieDetails/MovieDetails';
import type {MoviesListQuery as MoviesListQueryType} from './screens/MoviesList/__generated__/MoviesListQuery.graphql';
import {MoviesListQuery} from './screens/MoviesList/MoviesList';

function useQueryLoaderAsDict<T extends OperationType>(
  query: GraphQLTaggedNode,
) {
  const [queryRef, loadQuery] = useQueryLoader<T>(query);
  return {queryRef, loadQuery};
}

function usePreloadedQueries() {
  return {
    Home: useQueryLoaderAsDict<HomeQueryType>(HomeQuery),
    MoviesList: useQueryLoaderAsDict<MoviesListQueryType>(MoviesListQuery),
    MovieDetails:
      useQueryLoaderAsDict<MovieDetailsQueryType>(MovieDetailsQuery),
  };
}

export type PreloadedQueries =
  | ReturnType<typeof usePreloadedQueries>
  | undefined;

function AppUI() {
  return (
    <PreloadedQueriesContext.Provider value={usePreloadedQueries()}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationContainerTheme}>
          <RootStackNavigator.Navigator
            initialRouteName="Main"
            screenOptions={{headerShown: false}}>
            <RootStackNavigator.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animation: 'slide_from_left',
              }}
            />
            <RootStackNavigator.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                animation: 'slide_from_right',
              }}
            />
            <RootStackNavigator.Screen name="Main" component={MainScreen} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PreloadedQueriesContext.Provider>
  );
}

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <AppUI />
    </RelayEnvironmentProvider>
  );
}

const navigationContainerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.darkBlack,
  },
};

export default App;
