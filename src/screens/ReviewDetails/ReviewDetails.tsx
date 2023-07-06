import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleText} from '../../components/Text/TitleText';
import {BigTitleText} from '../../components/Text/BigTitleText';
import {Input} from '@rneui/themed';
import {Image} from '@rneui/base';
import {MainStackParams} from '../../navigators/MainStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommentList} from './components/CommentList';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';

export const ReviewDetailsQuery = graphql`
  query ReviewDetailsQuery($id: ID!) {
    review(id: $id) {
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
  return (
    <CommentList
      review={data.review}
      ListHeaderComponent={<ListHeader navigation={navigation} />}
    />
  );
}

interface ListHeaderProps {
  navigation: ReviewDetailsScreenProps['navigation'];
}

function ListHeader(_: ListHeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <TitleText>Someone's Review</TitleText>
      </View>
      <View style={styles.text}>
        <BigTitleText>Movie Name</BigTitleText>
      </View>
      <View style={styles.text}>
        <TitleText>Review Title</TitleText>
      </View>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        }}
        style={styles.avatar}
      />
      <View style={styles.commentInputContainer}>
        <Input placeholder="Write a Comment" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2C36',
    height: 50,
    alignItems: 'flex-start',
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  text: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentInputContainer: {
    flex: 1,
  },
});
