import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {MoviesListStackParams} from '../../navigators/MoviesListStackNavigator';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import type {MoviesListQuery as MoviesListQueryType} from './__generated__/MoviesListQuery.graphql';
import {AllMovieList} from './components/AllMovieList';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {MoviesListOptions} from './dialogs/MoviesListOptionsDialog';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {MovieListHeader} from './components/MovieListHeader';

export const MoviesListQuery = graphql`
  query MoviesListQuery {
    ...AllMovieList
  }
`;

type MoviesListScreenProps = NativeStackScreenProps<
  MoviesListStackParams,
  'MoviesList'
>;

export function MoviesListScreen(props: MoviesListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.Home.queryRef) {
    return <></>;
  }
  return <MoviesListScreenWithData {...props} />;
}

function MoviesListScreenWithData({
  navigation,
}: MoviesListScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<MoviesListQueryType>(
    MoviesListQuery,
    preloadedQueries!.MoviesList.queryRef!,
  );

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<MoviesListOptions>({
    sortBy: 'ReleaseDate',
    sortDirection: 'Desc',
  });

  const customHeader = useCallback(
    () => (
      <MovieListHeader
        search={search}
        setSearch={setSearch}
        options={options}
        setOptions={setOptions}
      />
    ),
    [search, options],
  );

  useEffect(() =>
    navigation.setOptions({headerShown: true, header: () => customHeader()}),
  );

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllMovieList titleContains={search} options={options} movies={data} />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
});
