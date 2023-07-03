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
import {Icon} from '@rneui/themed';
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
import {ListScreenHeader} from '../components/Headers/ListScreenHeader';
import {HeaderSearchBar} from '../components/Inputs/HeaderSearchBar';
import {HeaderButton} from '../components/Buttons/HeaderButton';

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

  const customHeader = (
    <ListScreenHeader>
      <HeaderSearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search movies..."
      />
      <MoviesListOptionsDialog
        customOpenButton={onPress => (
          <HeaderButton
            onPress={onPress}
            icon={<Icon color="white" type="font-awesome" name="filter" />}
          />
        )}
        onOk={opts => setOptions(opts)}
      />
    </ListScreenHeader>
  );
  useEffect(() => navigation.setOptions({header: () => customHeader}));

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
  container: {
    margin: 6,
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
