import React, {useContext} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
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
import {Icon} from '@rneui/themed';

const ReviewListItemFragment = graphql`
  fragment ReviewListItem on Review {
    id
    ...ReviewInfoDisplay
    author {
      ...HorizontalUserDisplay
    }
    ...ReviewLikeButton
    ...ReviewCommentButton
  }
`;

export interface ReviewListItemProps {
  review: ReviewListItem$key | null;
  onPress?: ActionCb;
  onNavigate?: ActionCb;
  containerStyle?: StyleProp<ViewStyle>;
  enabledEditButton?: boolean;
}

/**
 * Item for a list of reviews.
 */
export function ReviewListItem(props: ReviewListItemProps): React.JSX.Element {
  const data = useFragment(ReviewListItemFragment, props.review);

  const preloadedQueries = useContext(PreloadedQueriesContext);
  const defaultOnPress = () => {
    if (data?.id) {
      preloadedQueries?.ReviewDetails.loadQuery({id: data.id});
    }
    props.onNavigate?.();
  };
  const onPress = props.onPress ?? defaultOnPress;

  return (
    <View style={styles.container}>
      {props.enabledEditButton && (
        <EditReviewIconButton onPress={props.onNavigate} />
      )}
      <Pressable
        style={styles.contentContainer}
        onPress={onPress}
        android_ripple={pressableRippleConfig}>
        <HorizontalUserDisplay user={data?.author ?? null} />
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

type EditReviewIconButtonProps = PressableProps;
function EditReviewIconButton(props: EditReviewIconButtonProps) {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      {...props}
      style={styles.editButton}>
      <Icon name="edit" type="material" size={32} color={colors.white} />
    </Pressable>
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
  infoContainer: {
    padding: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  editButton: {
    position: 'absolute',
    right: 8,
    top: 12,
  },
});
