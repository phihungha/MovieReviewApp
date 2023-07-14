import {graphql} from 'relay-runtime';
import {PersonalReview$key} from './__generated__/PersonalReview.graphql';
import {useFragment} from 'react-relay';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../../styles/typography';
import colors from '../../../styles/colors';
import React from 'react';

const PersonalReviewFragment = graphql`
  fragment PersonalReview on Movie {
    viewerReview {
      ...ReviewListItem
    }
  }
`;

export interface PersonalReviewProps {
  movie: PersonalReview$key | null;
}

export function PersonalReview({
  movie,
}: PersonalReviewProps): React.JSX.Element {
  const data = useFragment(PersonalReviewFragment, movie);
  if (data?.viewerReview) {
    return <ReviewListItem review={data.viewerReview} />;
  }
  return (
    <View style={styles.emptyMessageContainer}>
      <Text style={styles.emptyMessage}>There is nothing here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: fontSizes.lg,
    color: colors.lightGrey,
  },
});
