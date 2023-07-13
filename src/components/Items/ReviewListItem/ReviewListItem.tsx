import React, {useContext} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ReviewInfoDisplay} from '../../Display/ReviewInfoDisplay';
import colors from '../../../styles/colors';
import {ReviewCommentButton} from './components/ReviewCommentButton';
import {ReviewLikeButton} from './components/ReviewLikeButton';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {ReviewListItem$key} from './__generated__/ReviewListItem.graphql';
import {HorizontalUserDisplay} from '../../Display/HorizontalUserDisplay';
import {ActionCb} from '../../../types/ActionCb';
import {pressableRippleConfig} from '../../../styles/pressable-ripple';
import {PreloadedQueriesContext} from '../../../relay/PreloadedQueriesContext';
import {Button} from '@rneui/themed';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../../navigators/MainStackParams';
import {MovieInfoDisplay} from '../../Display/MovieInfoDisplay';

const ReviewListItemFragment = graphql`
  fragment ReviewListItem on Review {
    id
    ...ReviewInfoDisplay
    author {
      ...HorizontalUserDisplay
    }
    movie {
      ...MovieInfoDisplay
    }
    ...ReviewLikeButton
    ...ReviewCommentButton
  }
`;

export interface ReviewListItemProps {
  review: ReviewListItem$key | null;
  movieHeader?: boolean;
  onPress?: ActionCb | null;
  onNavigate?: ActionCb | null;
  canEdit?: boolean;
  onEdit?: ActionCb | null;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Item for a list of reviews.
 */
export function ReviewListItem(props: ReviewListItemProps): React.JSX.Element {
  const data = useFragment(ReviewListItemFragment, props.review);

  const navigation = useNavigation<NavigationProp<MainStackParams>>();
  const preloadedQueries = useContext(PreloadedQueriesContext);

  function onPress() {
    if (props.onPress !== undefined) {
      return props.onPress?.();
    }

    if (props.onNavigate === null) {
      return;
    }

    if (data?.id) {
      preloadedQueries?.ReviewDetails.loadQuery({id: data.id});
    }

    props.onNavigate !== undefined
      ? props.onNavigate()
      : navigation.navigate('ReviewDetails');
  }

  function onEditPress() {
    if (props.onEdit !== undefined) {
      return props.onEdit?.();
    }

    if (data?.id) {
      preloadedQueries?.EditReview.loadQuery({id: data.id});
    }
    navigation.navigate('EditReview');
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentContainer}
        onPress={onPress}
        android_ripple={pressableRippleConfig}>
        <View style={styles.header}>
          {props.movieHeader ? (
            <MovieInfoDisplay
              moviePosterStyle={styles.movieInfoPoster}
              movie={data?.movie ?? null}
            />
          ) : (
            <HorizontalUserDisplay
              style={styles.userDisplay}
              user={data?.author ?? null}
            />
          )}
          {props.canEdit && <EditReviewIconButton onPress={onEditPress} />}
        </View>
        <ReviewInfoDisplay
          review={data}
          maxContentLineCount={3}
          style={styles.infoContainer}
        />
        <View style={styles.buttonsContainer}>
          <ReviewLikeButton review={data} />
          <ReviewCommentButton review={data} />
        </View>
      </Pressable>
    </View>
  );
}

function EditReviewIconButton({onPress}: {onPress: ActionCb}) {
  return (
    <Button
      onPress={onPress}
      containerStyle={styles.editButtonContainer}
      buttonStyle={styles.editButton}
      icon={{name: 'edit', type: 'material', color: colors.white}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  contentContainer: {
    padding: 15,
    gap: 10,
  },
  movieInfoPoster: {
    width: 65,
  },
  infoContainer: {
    padding: 0,
  },
  header: {
    flexDirection: 'row',
  },
  userDisplay: {
    flex: 1,
  },
  editButtonContainer: {
    width: 55,
  },
  editButton: {
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
});
