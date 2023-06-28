import React from 'react';
import {
  HomeStackNavigator,
  HomeStackParams,
} from '../navigators/HomeStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserWatchedListScreen} from './UserWatchedList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {CreateReviewScreen} from './CreateReview';
import {FlatList, ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {MovieGridItem} from '../components/Items/MovieGridItem';
import {BigTitleText} from '../components/Text/BigTitleText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export function VerticalItemSeparator(): JSX.Element {
  return <View style={styles.verticalItemSeparator} />;
}

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.horizontalItemSeparator} />;
}

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.mainContainerContent}>
      <View style={styles.popularSectionContainer}>
        <BigTitleText>Popular</BigTitleText>
        <FlatList
          data={arr}
          renderItem={() => (
            <MovieGridItem
              onPress={() => navigation.navigate('MovieDetails')}
              containerStyle={styles.horizontalGridItem}
            />
          )}
          horizontal
          ItemSeparatorComponent={HorizontalItemSeparator}
        />
      </View>

      <View style={styles.recentSectionContainer}>
        <BigTitleText>Recently released</BigTitleText>
        <FlatList
          key={'_'}
          columnWrapperStyle={styles.columnWrap}
          data={arr}
          renderItem={() => (
            <MovieGridItem
              onPress={() => navigation.navigate('MovieDetails')}
              containerStyle={styles.verticalGridItem}
            />
          )}
          numColumns={2}
          ItemSeparatorComponent={VerticalItemSeparator}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  mainContainerContent: {
    gap: 10,
  },
  popularSectionContainer: {
    gap: 10,
  },
  recentSectionContainer: {
    gap: 10,
  },
  columnWrap: {
    gap: 5,
    justifyContent: 'space-between',
  },
  horizontalGridItem: {
    width: 155,
  },
  verticalGridItem: {
    flex: 0.5,
  },
  horizontalItemSeparator: {
    width: 5,
  },
  verticalItemSeparator: {
    height: 5,
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
