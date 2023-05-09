import React from 'react';
import environment from './relay/environment';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {SignUpScreen} from './screens/SignUp';
import {LoginScreen} from './screens/Login';
import {MainScreen} from './screens/Main';
import {ThemeProvider} from '@rneui/themed';
import {MainNavigationContainerTheme, theme} from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RelayEnvironmentProvider environment={environment}>
        <NavigationContainer theme={MainNavigationContainerTheme}>
          <RootStackNavigator.Navigator
            initialRouteName="Main"
            screenOptions={{headerShown: false}}>
            <RootStackNavigator.Screen name="Login" component={LoginScreen} />
            <RootStackNavigator.Screen name="SignUp" component={SignUpScreen} />
            <RootStackNavigator.Screen name="Main" component={MainScreen} />
          </RootStackNavigator.Navigator>
        </NavigationContainer>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
}

export default App;
