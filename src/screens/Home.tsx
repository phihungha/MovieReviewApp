import React, {useState} from 'react';
import {HomeStackNavigator} from '../navigators/HomeStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {CreateReviewScreen} from './CreateReview';
import {FlatList, Pressable} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {MovieGridItem} from '../components/Items/MovieGridItem';
import {BigTitleText} from '../components/Text/BigTitleText';
import {Header, Input, Button, Icon} from '@rneui/themed';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export function HomeScreen({navigation}: {navigation: any}): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [search, setSearch] = useState('');

  if (search !== '') {
    return (
      <View>
        <Header
          centerComponent={
            <Input
              rightIcon={{color: 'white', name: 'search'}}
              value={search}
              onChangeText={setSearch}
              placeholder="Search movies..."
            />
          }
          rightComponent={
            <Button
              buttonStyle={styles.ButtonFilter}
              onPress={() => console.log('in progress')}>
              <Icon color="white" type="font-awesome" name="filter" />
            </Button>
          }
        />
        <FlatList
          key={'/'}
          columnWrapperStyle={styles.columnWrap}
          style={styles.padding}
          data={arr}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MovieDetails', item)}>
              <MovieGridItem />
            </Pressable>
          )}
          numColumns={2}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    );
  } else {
    return (
      <View>
        <View>
          <Header
            centerComponent={
              <Input
                rightIcon={{color: 'white', name: 'search'}}
                value={search}
                onChangeText={setSearch}
                placeholder="Search movies..."
              />
            }
            rightComponent={
              <Button buttonStyle={styles.ButtonFilter}>
                <Icon color="white" type="font-awesome" name="filter" />
              </Button>
            }
          />
          <View style={styles.padding}>
            <BigTitleText>Popular</BigTitleText>
          </View>
          <FlatList
            key={'#'}
            style={styles.padding}
            data={arr}
            renderItem={({item}) => (
              <Pressable
                onPress={() => navigation.navigate('MovieDetails', item)}>
                <MovieGridItem />
              </Pressable>
            )}
            horizontal
            ItemSeparatorComponent={HorizontalItemSeparator}
          />
        </View>

        <View style={styles.padding}>
          <BigTitleText>Recently released</BigTitleText>
        </View>
        <FlatList
          key={'_'}
          columnWrapperStyle={styles.columnWrap}
          style={styles.padding}
          data={arr}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MovieDetails', item)}>
              <MovieGridItem />
            </Pressable>
          )}
          numColumns={2}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    );
  }
}

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
        name="CreateReviewScreen"
        component={CreateReviewScreen}
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
        component={UserReviewsListScreen}
      />
      <HomeStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </HomeStackNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  columnWrap: {
    justifyContent: 'space-around',
  },
  HorizontalItemSeparator: {
    height: '100%',
    width: 20,
  },
  ItemSeparator: {
    height: 20,
    width: 20,
  },
  ButtonFilter: {
    backgroundColor: '#2A2C36',
  },
});
