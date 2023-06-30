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
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {MovieGridItem} from '../components/Items/MovieGridItem';
import {BigTitleText} from '../components/Text/BigTitleText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HorizontalMovieListItemSeparator,
  VerticalMovieListItemSeparator,
} from '../components/ListItemSeparators/MovieListItemSeparators';
import {graphql} from 'relay-runtime';
import {useLazyLoadQuery} from 'react-relay';
import type {
  HomeQuery,
  HomeQuery$data,
} from './__generated__/HomeQuery.graphql';

const HomeQuery = graphql`
  query HomeQuery {
    trendingMovies {
      edges {
        node {
          id
          ...MovieGridItemFragment
        }
      }
    }
    justReleasedMovies {
      edges {
        node {
          id
          ...MovieGridItemFragment
        }
      }
    }
  }
`;

interface HeaderProps {
  navigation: HomeScreenProps['navigation'];
  moviesData: HomeQuery$data;
}

function Header(props: HeaderProps) {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <BigTitleText>Popular</BigTitleText>
        <FlatList
          data={props.moviesData.trendingMovies.edges}
          keyExtractor={item => item?.node.id ?? '0'}
          renderItem={({item}) => (
            <MovieGridItem
              movie={item?.node ?? null}
              onPress={() => props.navigation.navigate('MovieDetails')}
              containerStyle={styles.horizontalGridItem}
            />
          )}
          horizontal
          ItemSeparatorComponent={HorizontalMovieListItemSeparator}
        />
      </View>
      <BigTitleText>Recently released</BigTitleText>
    </View>
  );
}

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  const moviesData = useLazyLoadQuery<HomeQuery>(HomeQuery, {});

  return (
    <FlatList
      ListHeaderComponent={Header}
      columnWrapperStyle={styles.columnWrap}
      keyExtractor={item => item?.node.id ?? '0'}
      data={moviesData.justReleasedMovies.edges}
      renderItem={({item}) => (
        <MovieGridItem
          movie={item?.node ?? null}
          onPress={() => navigation.navigate('MovieDetails')}
          containerStyle={styles.verticalGridItem}
        />
      )}
      numColumns={2}
      ItemSeparatorComponent={VerticalMovieListItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  mainContainerContent: {
    padding: 5,
    gap: 10,
  },
  sectionContainer: {
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
