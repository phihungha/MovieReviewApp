import React, {useState} from 'react';
import {fontSizes, fonts} from '../styles/typography';
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

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export function HomeScreen({navigation}: {navigation: any}): JSX.Element {
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
  };
  if (search !== '' || conditionSort !== '' || conditionFilter !== '') {
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
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MovieDetails', item)}>
              <MovieGridItem />
            </Pressable>
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
              <Button
                buttonStyle={styles.noDialogButton}
                onPress={HandleNoRange}>
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
              <Button
                buttonStyle={styles.ButtonFilter}
                onPress={() => setIsVisible(true)}>
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
