import React, {useContext, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CrewListItem} from '../../components/Items/CrewListItem';
import {ActorListItem} from '../../components/Items/ActorListItem';
import {ReviewListItem} from '../../components/Items/ReviewListItem';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {SubtitleText} from '../../components/Text/SubtitleText';
import {TitleText} from '../../components/Text/TitleText';
import {CriticReviewScoreIndicator} from '../../components/Display/CriticReviewScoreIndicator';
import colors from '../../styles/colors';
import {Button} from '@rneui/base';
import {RegularReviewScoreIndicator} from '../../components/Display/RegularReviewScoreIndicator';
import {graphql} from 'relay-runtime';
import {MoviePoster} from '../../components/Display/MoviePoster';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import type {MovieDetailsQuery as MovieDetailsQueryType} from './__generated__/MovieDetailsQuery.graphql';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}

export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export const MovieDetailsQuery = graphql`
  query MovieDetailsQuery($id: ID!) {
    movie(id: $id) {
      title
      releaseDate
      runningTime
      posterUrl
    }
  }
`;

type MovieDetailsScreenProps = NativeStackScreenProps<
  MainStackParams,
  'MovieDetails'
>;

export function MovieDetailsScreen(
  props: MovieDetailsScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.MovieDetails.queryRef) {
    return <></>;
  }
  return <MovieDetailsScreenWithData {...props} />;
}

function MovieDetailsScreenWithData({navigation}: MovieDetailsScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  const data = usePreloadedQuery<MovieDetailsQueryType>(
    MovieDetailsQuery,
    preloadedQueries!.MovieDetails.queryRef!,
  );

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [colorAll, setColorAll] = useState('#EF3651');
  const [colorCritic, setColorCritic] = useState('#2A2C36');
  const [colorRegular, setColorRegular] = useState('#2A2C36');

  const HandleAllButton = async () => {
    setColorAll('#EF3651');
    setColorCritic('#2A2C36');
    setColorRegular('#2A2C36');
    console.log('api here!');
  };

  const HandleCriticButton = async () => {
    setColorCritic('#EF3651');
    setColorAll('#2A2C36');
    setColorRegular('#2A2C36');
    console.log('api here!');
  };

  const HandleRegularButton = async () => {
    setColorRegular('#EF3651');
    setColorCritic('#2A2C36');
    setColorAll('#2A2C36');
    console.log('api here!');
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.background1} />
        <View style={styles.background2}>
          <MoviePoster
            style={styles.MoviePoster}
            imageUrl={data.movie?.posterUrl}
          />

          <View style={styles.MovieInfo}>
            <BigTitleText>{data.movie?.title}</BigTitleText>
            <SubtitleText>{data.movie?.releaseDate}</SubtitleText>
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
            <View style={styles.CriticScoreInfoContainer}>
              <View style={styles.padding}>
                <CriticReviewScoreIndicator score={5} />
                <TitleText>Critic score</TitleText>
                <SubtitleText>2222 reviews</SubtitleText>
              </View>
            </View>
            <View style={styles.RegularScoreInfoContainer}>
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

          <View style={styles.TabContainer}>
            <View style={styles.tabs}>
              <Button onPress={HandleAllButton} title="All" color={colorAll} />
            </View>
            <View style={styles.tabs}>
              <Button
                onPress={HandleCriticButton}
                title="Critic user"
                color={colorCritic}
              />
            </View>
            <View style={styles.tabs}>
              <Button
                onPress={HandleRegularButton}
                title="Regular user"
                color={colorRegular}
              />
            </View>
          </View>

          <FlatList
            style={styles.ReviewList}
            data={arr}
            renderItem={() => (
              <Pressable onPress={() => navigation.navigate('ReviewDetails')}>
                <ReviewListItem />
              </Pressable>
            )}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background1: {
    height: 150,
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
  CriticScoreInfoContainer: {
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
  RegularScoreInfoContainer: {
    width: 160,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  TabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
  },
  tabs: {
    width: 103,
  },
  ReviewList: {
    alignSelf: 'center',
    padding: 10,
  },
});
