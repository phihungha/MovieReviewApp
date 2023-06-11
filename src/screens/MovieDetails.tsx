import React from 'react';
import {FlatList, Image} from 'react-native';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CrewListItem} from '../components/Items/CrewListItem';
import {ActorListItem} from '../components/Items/ActorListItem';
import {BigTitleText} from '../components/Text/BigTitleText';
import {SubtitleText} from '../components/Text/SubtitleText';
import {TitleText} from '../components/Text/TitleText';
import {CriticReviewScoreIndicator} from '../components/Display/CriticReviewScoreIndicator';
import colors from '../styles/colors';
import {Button} from '@rneui/base';
import {RegularReviewScoreIndicator} from '../components/Display/RegularReviewScoreIndicator';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export function MovieDetailsScreen({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView>
      <View style={styles.background1} />
      <View style={styles.background2}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
          }}
          style={styles.MoviePoster}
        />

        <View style={styles.MovieInfo}>
          <BigTitleText>John Wick</BigTitleText>
          <SubtitleText>2014</SubtitleText>
        </View>

        <View style={styles.MovieInfo2}>
          <SubtitleText>Genre: Thriller, Action</SubtitleText>
          <SubtitleText>
            Synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{' '}
          </SubtitleText>
        </View>

        <View style={styles.padding}>
          <TitleText>Crew</TitleText>
        </View>
        <FlatList
          style={styles.padding}
          data={arr}
          renderItem={CrewListItem}
          horizontal
          ItemSeparatorComponent={HorizontalItemSeparator}
        />

        <View style={styles.padding}>
          <TitleText>Cast</TitleText>
        </View>
        <FlatList
          style={styles.padding}
          data={arr}
          renderItem={ActorListItem}
          horizontal
          ItemSeparatorComponent={HorizontalItemSeparator}
        />

        <View style={styles.ScoreContainer}>
          <View style={styles.ScoreInfoContainer}>
            <View style={styles.padding}>
              <CriticReviewScoreIndicator score={5} />
              <TitleText>Critic score</TitleText>
              <SubtitleText>2222 reviews</SubtitleText>
            </View>
          </View>
          <View style={styles.ScoreInfoContainer}>
            <View style={styles.padding}>
              <RegularReviewScoreIndicator score={5} />
              <TitleText>Regular score</TitleText>
              <SubtitleText>2222 reviews</SubtitleText>
            </View>
          </View>
        </View>

        <View style={styles.padding}>
          <TitleText>Reviews</TitleText>
        </View>

        <View style={styles.ButtonContainer}>
          <Button
            onPress={() => navigation.navigate('CreateReview')}
            title="Create a new review"
            color="#EF3651"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background1: {
    height: 100,
    backgroundColor: 'grey',
  },
  background2: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
  },
  MoviePoster: {
    position: 'absolute',
    top: -70,
    height: 140,
    width: 100,
    marginHorizontal: 10,
  },
  MovieInfo: {
    alignItems: 'flex-start',
    marginLeft: 125,
    marginTop: 5,
  },
  MovieInfo2: {
    alignItems: 'flex-start',
    padding: 10,
  },
  padding: {
    padding: 10,
  },
  ItemSeparator: {
    height: 20,
    width: 20,
  },
  HorizontalItemSeparator: {
    height: '100%',
    width: 20,
  },
  ScoreContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
  },
  ScoreInfoContainer: {
    width: 160,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 4,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  ButtonContainer: {
    width: 350,
    borderRadius: 5,
    alignSelf: 'center',
    padding: 10,
  },
});
