import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../../../components/Text/TitleText';
import {RegularText} from '../../../components/Text/RegularText';
import {CriticReviewScoreIndicator} from '../../../components/Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../../../components/Display/RegularReviewScoreIndicator';
import {graphql} from 'relay-runtime';
import {CreateReviewMovieInfo$key} from './__generated__/CreateReviewMovieInfo.graphql';
import {useFragment} from 'react-relay';
import {MoviePoster} from '../../../components/Display/MoviePoster';

const CreateReviewMovieInfoFragment = graphql`
  fragment CreateReviewMovieInfo on Movie {
    posterUrl
    title
    releaseDate
    criticScore
    regularScore
  }
`;

interface CreateReviewMovieInfoProps {
  movie: CreateReviewMovieInfo$key | null;
}

export function CreateReviewMovieInfo({
  movie,
}: CreateReviewMovieInfoProps): React.JSX.Element {
  const data = useFragment(CreateReviewMovieInfoFragment, movie);

  return (
    <View style={styles.container}>
      <MoviePoster style={styles.moviePoster} imageUrl={data?.posterUrl} />
      <View style={styles.infoContainer}>
        <TitleText>{data?.title ?? 'N/A'}</TitleText>
        <RegularText>{new Date(data?.releaseDate).getFullYear()}</RegularText>
        <View style={styles.scoreContainer}>
          <CriticReviewScoreIndicator score={data?.criticScore} />
          <RegularReviewScoreIndicator score={data?.regularScore} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  moviePoster: {
    width: 80,
  },
  infoContainer: {
    gap: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    gap: 32,
  },
});
