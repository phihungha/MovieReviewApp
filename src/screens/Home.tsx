import React from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserReviewsList} from './UserReviewsList';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsList} from './UserLikedCommentsList';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';

import {CheckBox} from '@rneui/themed';
import {Button} from '@rneui/themed';
import {Input} from '@rneui/themed';

export function HomeScreen(): JSX.Element {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>A quick brown fox jumps over the lazy dog</Text>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      <Input
        placeholder="INPUT WITH ICON"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        // Use ThemeProvider to make change for all checkbox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor="red"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xl,
  },
});

export function HomeStackScreen(): JSX.Element {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <HomeStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <HomeStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsList}
      />
      <HomeStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsList}
      />
    </HomeStackNavigator.Navigator>
  );
}
