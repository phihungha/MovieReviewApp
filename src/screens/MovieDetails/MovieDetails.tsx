import React, {useContext, useState} from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ReviewListItem} from '../../components/Items/ReviewListItem';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {SubtitleText} from '../../components/Text/SubtitleText';
import {TitleText} from '../../components/Text/TitleText';
import {Button} from '@rneui/base';
import {graphql} from 'relay-runtime';
import {MoviePoster} from '../../components/Display/MoviePoster';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import type {MovieDetailsQuery as MovieDetailsQueryType} from './__generated__/MovieDetailsQuery.graphql';
import {HorizontalList} from '../../components/Lists/HorizontalList';
import {ActorListItem} from './components/ActorListItem';

export const MovieDetailsQuery = graphql`
  query MovieDetailsQuery($id: ID!) {
    movie(id: $id) {
      title
      releaseDate
      runningTime
      posterUrl
      actingCredits {
        id
        ...ActorListItem
      }
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
    <ScrollView>
      <View style={styles.background1} />
      <View style={styles.background2}>
        <MoviePoster
          style={styles.MoviePoster}
          imageUrl={data.movie?.posterUrl}
        />

        <View style={styles.topInfoContainer}>
          <BigTitleText>{data.movie?.title}</BigTitleText>
          <SubtitleText>{data.movie?.releaseDate}</SubtitleText>
        </View>

        <View style={styles.detailsInfoContainer}>
          <InfoItem name="Genres" value="Thriller, Action" />

          <InfoItem
            name="Synopsis"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat"
          />

          <InfoItem name="Running time" value={data.movie?.runningTime} />
        </View>

        <View style={styles.crewListContainer}>
          <TitleText>Crew</TitleText>
          <HorizontalList
            data={data.movie?.actingCredits}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ActorListItem actingCredit={item} />}
          />
        </View>

        <View style={styles.ScoreContainer} />

        <View style={styles.crewListContainer}>
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
          renderItem={() => <ReviewListItem />}
        />
      </View>
    </ScrollView>
  );
}

interface InfoItemProps {
  name: string;
  value?: string | number;
}

function InfoItem({name, value}: InfoItemProps) {
  return (
    <View>
      <SubtitleText>
        {name}: {value}
      </SubtitleText>
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
  topInfoContainer: {
    marginLeft: 125,
    marginTop: 5,
  },
  detailsInfoContainer: {
    padding: 10,
  },
  crewListContainer: {
    gap: 5,
  },
  ScoreContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
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
