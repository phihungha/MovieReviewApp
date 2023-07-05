import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {MoviesListStackParams} from '../../navigators/MoviesListStackNavigator';
import {StyleSheet, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {graphql} from 'relay-runtime';
import {usePreloadedQuery} from 'react-relay';
import type {MoviesListQuery as MoviesListQueryType} from './__generated__/MoviesListQuery.graphql';
import {AllMovieList} from './components/AllMovieList';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {
  MoviesListOptions,
  MoviesListOptionsDialog,
} from './dialogs/MoviesListOptionsDialog';
import {ListScreenHeader} from '../../components/Headers/ListScreenHeader';
import {HeaderSearchBar} from '../../components/Inputs/HeaderSearchBar';
import {HeaderButton} from '../../components/Buttons/HeaderButton';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {ActionCb} from '../../types/ActionCb';

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
    sortBy: 'releaseDate',
    sortDirection: 'Desc',
  });

  const customHeader = useCallback(
    () => (
      <Header
        search={search}
        setSearch={setSearch}
        options={options}
        setOptions={setOptions}
      />
    ),
    [search, options],
  );

  useEffect(() => navigation.setOptions({header: () => customHeader()}));

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <AllMovieList
          titleContains={search}
          options={options}
          movies={data}
          onNavigate={() => navigation.navigate('MovieDetails')}
        />
      </Suspense>
    </View>
  );
}

interface HeaderProps {
  search: string;
  setSearch: (i: string) => void;
  options: MoviesListOptions;
  setOptions: (i: MoviesListOptions) => void;
}

function Header(props: HeaderProps) {
  const headerBtn = useCallback(
    (onPress: ActionCb) => (
      <HeaderButton
        onPress={onPress}
        icon={<Icon color="white" type="font-awesome" name="filter" />}
      />
    ),
    [],
  );

  return (
    <ListScreenHeader>
      <HeaderSearchBar
        value={props.search}
        onChangeText={i => props.setSearch(i)}
        placeholder="Search movies..."
      />
      <MoviesListOptionsDialog
        options={props.options}
        onOptionsChanged={i => props.setOptions(i)}
        customOpenButton={onPress => headerBtn(onPress)}
      />
    </ListScreenHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
});
