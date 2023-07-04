import React, {useContext} from 'react';
import {
  HomeStackNavigator,
  HomeStackParams,
} from '../../navigators/HomeStackNavigator';
import {MovieDetailsScreen} from '../MovieDetails';
import {MovieReviewsListScreen} from '../MovieReviewsList';
import {ReviewDetailsScreen} from '../ReviewDetails';
import {UserWatchedListScreen} from '../UserWatchedList';
import {UserReviewsListScreen} from '../UserReviewsList';
import {UserDetailsScreen} from '../UserDetails';
import {UserLikedCommentsListScreen} from '../UserLikedCommentsList';
import {CreateReviewScreen} from '../CreateReview';
import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import type {
  HomeQuery as HomeQueryType,
  HomeQuery$data,
} from './__generated__/HomeQuery.graphql';
import {TrendingMovieList} from './TrendingMovieList';
import {JustReleasedMovieList} from './JustReleasedMovieList';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';

export const HomeQuery = graphql`
  query HomeQuery {
    ...TrendingMovieList
    ...JustReleasedMovieList
  }
`;

type HomeScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export function HomeScreen(props: HomeScreenProps): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.Home.queryRef) {
    return <></>;
  }
  return <HomeScreenWithData {...props} />;
}

function HomeScreenWithData({navigation}: HomeScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<HomeQueryType>(
    HomeQuery,

    preloadedQueries!.Home.queryRef!,
  );

  return (
    <View style={styles.container}>
      <JustReleasedMovieList
        ListHeaderComponent={
          <ListHeader queryData={data} navigation={navigation} />
        }
        onItemPressed={() => navigation.navigate('MovieDetails')}
        justReleasedMovies={data}
      />
    </View>
  );
}

interface ListHeaderProps {
  navigation: HomeScreenProps['navigation'];
  queryData: HomeQuery$data;
}

function ListHeader({queryData, navigation}: ListHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.sectionContainer}>
        <BigTitleText>Popular</BigTitleText>
        <TrendingMovieList
          trendingMovies={queryData}
          onItemPressed={() => navigation.navigate('MovieDetails')}
        />
      </View>
      <BigTitleText>Recently released</BigTitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerContainer: {
    gap: 10,
    marginBottom: 10,
  },
  sectionContainer: {
    gap: 10,
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
