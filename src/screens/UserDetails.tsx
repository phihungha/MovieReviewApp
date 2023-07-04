import React from 'react';
import {MyAccountStackNavigator} from '../navigators/MyAccountStackNavigator';
import {MovieDetailsScreen} from './MovieDetails/MovieDetails';
import {MovieReviewsListScreen} from './MovieReviewsList';
import {ReviewDetailsScreen} from './ReviewDetails';
import {UserLikedCommentsListScreen} from './UserLikedCommentsList';
import {UserReviewsListScreen} from './UserReviewsList';
import {UserWatchedListScreen} from './UserWatchedList';
import {CreateReviewScreen} from './CreateReview';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FlatList, Pressable} from 'react-native';
import {VeryBigTitleText} from '../components/Text/VeryBigTitleText';
import {TitleText} from '../components/Text/TitleText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BigTitleText} from '../components/Text/BigTitleText';
import {MyWatchedListScreen} from './MyWatchedList';
import {WatchedMovieListItem} from '../components/Items/WatchedMovieListItem';
import {MyReviewsListScreen} from './MyReviewsList';
import {ReviewListItem} from '../components/Items/ReviewListItem';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function UserDetailsScreen({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  const arr: number[] = [1];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
          <VeryBigTitleText>John Weed</VeryBigTitleText>
        </View>
        <View style={styles.box}>
          <View style={styles.info}>
            <View style={styles.Icon}>
              <FontAwesome
                name="birthday-cake"
                size={20}
                color="#F6F6F6"
                style={{
                  marginHorizontal: 10,
                  // marginVertical: 10,
                }}
              />
              <TitleText>Birthday : 1/1/2000</TitleText>
            </View>
            <View style={styles.Icon}>
              <Fontisto
                name="earth"
                size={20}
                color="#F6F6F6"
                style={{
                  marginHorizontal: 10,
                  // marginVertical: 10,
                }}
              />
              <TitleText>Country : Viet Nam </TitleText>
            </View>
            <View style={styles.Icon}>
              <AntDesign
                name="heart"
                size={20}
                color="#F6F6F6"
                style={{
                  marginHorizontal: 10,
                  // marginVertical: 10,
                }}
              />
              <TitleText>Favourite genres : Action,Thriller </TitleText>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.padding}>
          <BigTitleText>Recently Watched</BigTitleText>
        </View>
        <FlatList
          key={'#'}
          style={styles.padding}
          data={arr}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MyWatchedList', item)}>
              <WatchedMovieListItem />
            </Pressable>
          )}
          ItemSeparatorComponent={HorizontalItemSeparator}
        />
      </View>
      <View>
        <View style={styles.text}>
          <BigTitleText>More...</BigTitleText>
        </View>
      </View>
      <View>
        <View style={styles.padding}>
          <BigTitleText>Recently Reviewed</BigTitleText>
        </View>
        <FlatList
          key={'&'}
          style={styles.padding}
          data={arr}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MyReviewsList', item)}>
              <ReviewListItem />
            </Pressable>
          )}
          ItemSeparatorComponent={HorizontalItemSeparator}
        />
      </View>
      <View>
        <View style={styles.text}>
          <BigTitleText>More...</BigTitleText>
        </View>
      </View>
      <View>
        <View style={styles.padding}>
          <BigTitleText>Recently Liked</BigTitleText>
        </View>
        <FlatList
          key={'#'}
          style={styles.padding}
          data={arr}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MyReviewsList', item)}>
              <ReviewListItem />
            </Pressable>
          )}
          ItemSeparatorComponent={HorizontalItemSeparator}
        />
      </View>
      <View>
        <View style={styles.text}>
          <BigTitleText>More...</BigTitleText>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
  },
  header: {
    width: 375,
    height: 240,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -200,
  },
  box: {
    width: '100%',
    height: 200,
    backgroundColor: '#1E1F28',
    borderWidth: 10,
    borderColor: '#1E1F28',
    justifyContent: 'center',
  },
  info: {
    height: '100%',
    borderColor: '#2A2C36',
    backgroundColor: '#2A2C36',
    borderTopWidth: 10,
    borderLeftWidth: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingLeft: 10,
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: 'white',
  },
  Icon: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  padding: {
    // paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    padding: 10,
    alignItems: 'center',
  },
});
export function MyAccountStackScreen(): JSX.Element {
  return (
    <MyAccountStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MyAccountStackNavigator.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="CreateReviewScreen"
        component={CreateReviewScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MovieReviewList"
        component={MovieReviewsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserWatchedList"
        component={UserWatchedListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserReviewsList"
        component={UserReviewsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="UserLikedCommentsList"
        component={UserLikedCommentsListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MyWatchedList"
        component={MyWatchedListScreen}
      />
      <MyAccountStackNavigator.Screen
        name="MyReviewsList"
        component={MyReviewsListScreen}
      />
    </MyAccountStackNavigator.Navigator>
  );
}
