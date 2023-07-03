import React, {Suspense, useEffect, useState} from 'react';
import {
  MoviesListStackNavigator,
  MoviesListStackParams,
} from '../navigators/MoviesListStackNavigator';
import {MovieDetailsScreen} from './MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserDetailsScreen} from './UserDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import {CreateReviewScreen} from './CreateReview';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {useLazyLoadQuery} from 'react-relay';
import type {MoviesListQuery} from './__generated__/MoviesListQuery.graphql';
import {AllMovieList} from '../components/Lists/AllMovieList';
import {StandardLoadingIcon} from '../components/Display/StandardLoadingIcon';
import {
  MoviesListOptions,
  MoviesListOptionsDialog,
} from '../dialogs/MoviesListOptionsDialog';

const MoviesListQuery = graphql`
  query MoviesListQuery {
    ...AllMovieList
  }
`;

type MoviesListScreenProps = NativeStackScreenProps<
  MoviesListStackParams,
  'MoviesList'
>;

export function MoviesListScreen({
  navigation,
}: MoviesListScreenProps): React.JSX.Element {
  const data = useLazyLoadQuery<MoviesListQuery>(MoviesListQuery, {});

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<MoviesListOptions>({
    sortBy: 'releaseDate',
    sortDirection: 'Desc',
  });

  useEffect(() => navigation.setOptions({header: () => customHeader}));

  const customHeader = (
    <View style={{flexDirection: 'row'}}>
      <SearchBar
        containerStyle={{padding: 0, borderRadius: 0}}
        inputContainerStyle={{borderRadius: 0}}
        rightIcon={{color: 'white', name: 'search'}}
        value={search}
        onChangeText={setSearch}
        placeholder="Search movies..."
      />
      <MoviesListOptionsDialog onOk={opts => setOptions(opts)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllMovieList
          titleContains={search}
          options={options}
          movies={data}
          onItemPressed={() => navigation.navigate('MovieDetails')}
        />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  gridItem: {
    flex: 0.5,
  },
  filterBtn: {
    backgroundColor: '#2A2C36',
  },
  container: {
    margin: 10,
  },
});

export function MoviesListStackScreen(): JSX.Element {
  return (
    <MoviesListStackNavigator.Navigator>
      <MoviesListStackNavigator.Screen
        name="MoviesList"
        component={MoviesListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="CreateReviewScreen"
        component={CreateReviewScreen}
      />
      <MoviesListStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsListScreen}
      />
      <MoviesListStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
    </MoviesListStackNavigator.Navigator>
  );
}
