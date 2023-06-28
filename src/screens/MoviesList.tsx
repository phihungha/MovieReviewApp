import React, {useState} from 'react';
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
import {fontSizes, fonts} from '../styles/typography';
import {FlatList} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {MovieGridItem} from '../components/Items/MovieGridItem';
import {
  Header,
  Input,
  Button,
  Icon,
  BottomSheet,
  ListItem,
  Dialog,
} from '@rneui/themed';
import {TitleText} from '../components/Text/TitleText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}

type MoviesListScreenProps = NativeStackScreenProps<
  MoviesListStackParams,
  'MoviesList'
>;

export function MoviesListScreen({
  navigation,
}: MoviesListScreenProps): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [search, setSearch] = useState('');
  const [minRange, setMinRange] = useState('');
  const [maxRange, setMaxRange] = useState('');
  const [conditionSort, setConditionSort] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSort1, setIsVisibleSort1] = useState(false);
  const [isVisibleSort2, setIsVisibleSort2] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const [isVisibleRange, setIsVisibleRange] = useState(false);

  const list = [
    {title: 'Sort by', onPress: () => setIsVisibleSort1(true)},
    {title: 'Filter by', onPress: () => setIsVisibleFilter(true)},
    {title: 'Reset', onPress: () => HandleReset()},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  const listSort1 = [
    {title: 'Name', onPress: () => HandleNameSort()},
    {title: 'Release date', onPress: () => HandleDateSort()},
    {title: 'User score', onPress: () => HandleUserSort()},
    {title: 'Critic score', onPress: () => HandleCriticSort()},
    {title: 'View count', onPress: () => HandleViewSort()},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisibleSort1(false),
    },
  ];

  const listSort2 = [
    {title: 'Ascending', onPress: () => HandleAscendingSort(conditionSort)},
    {title: 'Decending', onPress: () => HandleDecendingSort(conditionSort)},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => HandleCancelSort2(),
    },
  ];

  const listFilter = [
    {title: 'Genre', onPress: () => HandleGenreFilter()},
    {title: 'Release year', onPress: () => HandleYearFilter()},
    {title: 'User score', onPress: () => HandleUserFilter()},
    {title: 'Critic score', onPress: () => HandleCriticFilter()},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisibleFilter(false),
    },
  ];

  const HandleNoRange = async () => {
    console.log('api here!');
    setIsVisibleRange(false);
  };

  const HandleYesRange = async (minNumber: string, maxNumber: string) => {
    console.log(minNumber + maxNumber);
    console.log('api here');
    setIsVisibleRange(false);
  };

  const HandleReset = async () => {
    setConditionSort('');
    setConditionFilter('');
    setMinRange('');
    setMaxRange('');
    setIsVisible(false);
  };

  const HandleCancelSort2 = async () => {
    setIsVisibleSort2(false);
    setConditionSort('');
  };

  const HandleNameSort = async () => {
    setIsVisible(false);
    setIsVisibleSort1(false);
    setIsVisibleSort2(true);
    setConditionSort('Name');
  };

  const HandleDateSort = async () => {
    setIsVisible(false);
    setIsVisibleSort1(false);
    setIsVisibleSort2(true);
    setConditionSort('Release Date');
  };

  const HandleUserSort = async () => {
    setIsVisible(false);
    setIsVisibleSort1(false);
    setIsVisibleSort2(true);
    setConditionSort('User score');
  };

  const HandleCriticSort = async () => {
    setIsVisible(false);
    setIsVisibleSort1(false);
    setIsVisibleSort2(true);
    setConditionSort('Critic score');
  };

  const HandleViewSort = async () => {
    setIsVisible(false);
    setIsVisibleSort1(false);
    setIsVisibleSort2(true);
    setConditionSort('View count');
  };

  const HandleAscendingSort = async (SortType: string) => {
    console.log(SortType);
    console.log('api here');
    setIsVisibleSort2(false);
  };

  const HandleDecendingSort = async (SortType: string) => {
    console.log(SortType);
    console.log('api here');
    setIsVisibleSort2(false);
  };

  const HandleGenreFilter = async () => {
    setIsVisible(false);
    setIsVisibleFilter(false);
    setIsVisibleRange(true);
    setConditionFilter('Genre');
  };

  const HandleYearFilter = async () => {
    setIsVisible(false);
    setIsVisibleFilter(false);
    setIsVisibleRange(true);
    setConditionFilter('Release year');
  };

  const HandleUserFilter = async () => {
    setIsVisible(false);
    setIsVisibleFilter(false);
    setIsVisibleRange(true);
    setConditionFilter('User score');
  };

  const HandleCriticFilter = async () => {
    setIsVisible(false);
    setIsVisibleFilter(false);
    setIsVisibleRange(true);
    setConditionFilter('Critic score');
    console.log(conditionFilter);
  };

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
            onPress={() => setIsVisible(true)}>
            <Icon color="white" type="font-awesome" name="filter" />
          </Button>
        }
      />
      <FlatList
        key={'/'}
        columnWrapperStyle={styles.columnWrap}
        style={styles.padding}
        data={arr}
        renderItem={() => (
          <MovieGridItem onPress={() => navigation.navigate('MovieDetails')} />
        )}
        numColumns={2}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <BottomSheet modalProps={{}} isVisible={isVisibleSort1}>
        {listSort1.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <BottomSheet modalProps={{}} isVisible={isVisibleSort2}>
        {listSort2.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <BottomSheet modalProps={{}} isVisible={isVisibleFilter}>
        {listFilter.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>

      <Dialog
        isVisible={isVisibleRange}
        overlayStyle={styles.container}
        style={styles.container}>
        <Dialog.Title
          titleStyle={styles.titleTextDialog}
          title="Input range?"
        />
        <View>
          <Input label={'Min'} value={minRange} onChangeText={setMinRange} />

          <Input label={'Max'} value={maxRange} onChangeText={setMaxRange} />
        </View>
        <Dialog.Actions>
          <View style={styles.containerButtonDialog}>
            <Button buttonStyle={styles.noDialogButton} onPress={HandleNoRange}>
              <TitleText>No</TitleText>
            </Button>
            <Button
              buttonStyle={styles.yesDialogButton}
              onPress={() => HandleYesRange(minRange, maxRange)}>
              <TitleText>Yes</TitleText>
            </Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

export function MoviesListStackScreen(): JSX.Element {
  return (
    <MoviesListStackNavigator.Navigator screenOptions={{headerShown: false}}>
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
  RangeContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  titleTextDialog: {
    color: 'white',
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.lg,
    textAlign: 'left',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'black',
    paddingVertical: 12,
  },
  containerButtonDialog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: -16,
  },
  yesDialogButton: {
    width: 100,
    borderRadius: 12,
    backgroundColor: '#EF3651',
  },
  noDialogButton: {
    width: 100,
    borderRadius: 12,
    backgroundColor: '#2A2C36',
  },
});
