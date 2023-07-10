import React, {useContext} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {Image} from '@rneui/base';
import {graphql} from 'relay-runtime';
import {WatchedMovieListItem$key} from './__generated__/WatchedMovieListItem.graphql';
import {useFragment} from 'react-relay';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';

const WatchedMovieListItemFragment = graphql`
  fragment WatchedMovieListItem on Movie {
    id
    title
    posterUrl
    releaseDate
  }
`;

export interface WatchedMovieListItemProps {
  movie: WatchedMovieListItem$key | null;
  onPress?: ActionCb;
  onNavigate?: ActionCb | null;
}

/**
 * Item for a list of watched movies.
 */
export function WatchedMovieListItem(
  props: WatchedMovieListItemProps,
): JSX.Element {
  const data = useFragment(WatchedMovieListItemFragment, props.movie);

  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const preloadedQueries = useContext(PreloadedQueriesContext);

  const defaultOnPress = () => {
    if (props.onNavigate === null) {
      return;
    }

    if (data?.id) {
      preloadedQueries?.MovieDetails.loadQuery({id: data.id});
    }

    props.onNavigate !== undefined
      ? props.onNavigate
      : navigation.navigate('MovieDetails');
  };

  const onPress = props.onPress ?? defaultOnPress;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentContainer}
        onPress={onPress}
        android_ripple={pressableRippleConfig}>
        <Image
          style={styles.image}
          source={data?.posterUrl ? {uri: data.posterUrl} : {}}
        />
        <View style={styles.infoContainer}>
          <TitleText>{data?.title ?? 'N/A'}</TitleText>
          <RegularText>{new Date(data?.releaseDate).getFullYear()}</RegularText>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    aspectRatio: 0.67,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingLeft: 15,
  },
});
