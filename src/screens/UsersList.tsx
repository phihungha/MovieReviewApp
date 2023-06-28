import React from 'react';
import {UsersListStackNavigator} from '../navigators/UsersListStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import {CreateReviewScreen} from './CreateReview';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FlatList} from 'react-native';
import {TitleText} from '../components/Text/TitleText';
import {UserListItem} from '../components/Items/UserListItem';
import {SafeAreaView} from 'react-native-safe-area-context';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function UsersListScreen(): JSX.Element {
  const arr: number[] = [1, 2, 3, 4];
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.text}>
            <TitleText>All Users</TitleText>
          </View>
        </View>
        <FlatList
          style={styles.padding}
          data={arr}
          renderItem={UserListItem}
          ItemSeparatorComponent={HorizontalItemSeparator}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
    height: 50,
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  text: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export function UsersListStackScreen(): JSX.Element {
  return (
    <UsersListStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <UsersListStackNavigator.Screen
        name="UsersList"
        component={UsersListScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="CreateReviewScreen"
        component={CreateReviewScreen}
      />
      <UsersListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <UsersListStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsListScreen}
      />
      <UsersListStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </UsersListStackNavigator.Navigator>
  );
}
