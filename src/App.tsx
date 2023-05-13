import React from 'react';
import environment from './relay/environment';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {SignUpScreen} from './screens/SignUp';
import {LoginScreen} from './screens/Login';
import {MainScreen} from './screens/Main';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './styles/theme';
import colors from './styles/colors';

const NavigationContainerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.darkBlack,
  },
};

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={NavigationContainerTheme}>
          <RootStackNavigator.Navigator
            initialRouteName="Main"
            screenOptions={{headerShown: false}}>
            <RootStackNavigator.Screen name="Login" component={LoginScreen} />
            <RootStackNavigator.Screen name="SignUp" component={SignUpScreen} />
            <RootStackNavigator.Screen name="Main" component={MainScreen} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
