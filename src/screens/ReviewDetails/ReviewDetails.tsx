import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {MainStackParams} from '../../navigators/MainStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommentList} from './components/CommentList';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import {ReviewDetailsQuery$data} from './__generated__/ReviewDetailsQuery.graphql';
import {ReviewListItem} from '../../components/Items/ReviewListItem/ReviewListItem';
import {CommentCreator} from './components/CommentCreator';

export const ReviewDetailsQuery = graphql`
  query ReviewDetailsQuery($id: ID!) {
    review(id: $id) {
      movie {
        title
        releaseDate
      }
      ...ReviewListItem
      ...CommentList
    }
  }
`;

type ReviewDetailsScreenProps = NativeStackScreenProps<
  MainStackParams,
  'ReviewDetails'
>;

export function ReviewDetailsScreen(
  props: ReviewDetailsScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.ReviewDetails.queryRef) {
    return <></>;
  }

  return <ReviewDetailsScreenWithData {...props} />;
}

export function ReviewDetailsScreenWithData({
  navigation,
}: ReviewDetailsScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery(
    ReviewDetailsQuery,
    preloadedQueries!.ReviewDetails.queryRef!,
  );
  const review = data.review;

  const yearStr = new Date(review?.movie.releaseDate).getFullYear();
  const headerTitle = `${review?.movie.title} (${yearStr})`;
  useEffect(() => navigation.setOptions({headerTitle: headerTitle}));

  return (
    <View style={styles.container}>
      <CommentList
        review={review}
        ListHeaderComponent={<ListHeader navigation={navigation} data={data} />}
      />
    </View>
  );
}

interface ListHeaderProps {
  navigation: ReviewDetailsScreenProps['navigation'];
  data: ReviewDetailsQuery$data;
}

function ListHeader({data}: ListHeaderProps): React.JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <ReviewListItem review={data.review} />
      <CommentCreator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerContainer: {
    gap: 15,
    marginBottom: 15,
  },
});
