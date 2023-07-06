import React, {Suspense, useCallback, useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import type {MovieReviewListQuery as MovieReviewListQueryType} from './__generated__/MovieReviewListQuery.graphql';
import {Icon, Tab, TabView} from '@rneui/themed';
import {CriticReviewList} from './components/CriticReviewList';
import {RegularReviewList} from './components/RegularReviewList';
import {HeaderSearchBar} from '../../components/Inputs/HeaderSearchBar';
import {ListScreenHeader} from '../../components/Headers/ListScreenHeader';
import {
  MovieReviewListOptions,
  MovieReviewListOptionsDialog,
} from './dialogs/MovieReviewListOptionsDialog';
import {HeaderButton} from '../../components/Buttons/HeaderButton';
import {ActionCb} from '../../types/ActionCb';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';

export const MovieReviewListQuery = graphql`
  query MovieReviewListQuery($id: ID!) {
    movie(id: $id) {
      ...CriticReviewList
      ...RegularReviewList
    }
  }
`;

type MovieReviewListScreenProps = NativeStackScreenProps<MainStackParams>;

export function MovieReviewListScreen(
  props: MovieReviewListScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.MovieReviewList.queryRef) {
    return <></>;
  }
  return <MovieReviewListScreenWithData {...props} />;
}

function MovieReviewListScreenWithData({
  navigation,
}: MovieReviewListScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<MovieReviewListQueryType>(
    MovieReviewListQuery,
    preloadedQueries!.MovieReviewList.queryRef!,
  );

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<MovieReviewListOptions>({
    sortBy: 'ThankCount',
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

  navigation.setOptions({headerShown: true, header: () => customHeader()});

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Tab value={index} onChange={i => setIndex(i)}>
        <Tab.Item title="Critic" />
        <Tab.Item title="Regular" />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item>
          <Suspense fallback={<StandardLoadingIcon />}>
            <CriticReviewList
              movie={data.movie}
              textContains={search}
              options={options}
              onNavigate={() => navigation.navigate('ReviewDetails')}
            />
          </Suspense>
        </TabView.Item>
        <TabView.Item>
          <Suspense fallback={<StandardLoadingIcon />}>
            <RegularReviewList
              movie={data.movie}
              textContains={search}
              options={options}
              onNavigate={() => navigation.navigate('ReviewDetails')}
            />
          </Suspense>
        </TabView.Item>
      </TabView>
    </View>
  );
}

interface HeaderProps {
  search: string;
  setSearch: (i: string) => void;
  options: MovieReviewListOptions;
  setOptions: (i: MovieReviewListOptions) => void;
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
        placeholder="Search reviews..."
      />
      <MovieReviewListOptionsDialog
        options={props.options}
        onOptionsChanged={i => props.setOptions(i)}
        customOpenButton={onPress => headerBtn(onPress)}
      />
    </ListScreenHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: 6,
  },
});
