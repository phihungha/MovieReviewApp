import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button} from '@rneui/themed';
import {graphql} from 'relay-runtime';
import {useMutation, usePreloadedQuery} from 'react-relay';
import type {CreateReviewMutation as CreateReviewMutationType} from './__generated__/CreateReviewMutation.graphql';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';
import {MovieInfoDisplay} from '../../components/Display/MovieInfoDisplay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import type {CreateReviewQuery as CreateReviewQueryType} from './__generated__/CreateReviewQuery.graphql';
import Snackbar from 'react-native-snackbar';
import {ReviewEditor} from './components/ReviewEditor';
import validator from 'validator';

export const CreateReviewQuery = graphql`
  query CreateReviewQuery($id: ID!) {
    movie(id: $id) {
      id
      ...MovieInfoDisplay
    }
  }
`;

const CreateReviewMutation = graphql`
  mutation CreateReviewMutation($input: CreateReviewInput!) {
    createReview(input: $input) {
      ... on MutationCreateReviewSuccess {
        data {
          ...ReviewListItem
          movie {
            ...CriticAggregateScoreIndicator
            ...RegularAggregateScoreIndicator
            ...ScoreCountChart
            ...GenderScoreChart
            ...AgeScoreChart
          }
        }
      }

      ... on AlreadyExistsError {
        message
      }

      ... on ValidationError {
        message
      }
    }
  }
`;

type CreateReviewScreenProps = NativeStackScreenProps<
  MainStackParams,
  'CreateReview'
>;

export function CreateReviewScreen(
  props: CreateReviewScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.CreateReview.queryRef) {
    return <></>;
  }
  return <CreateReviewScreenWithData {...props} />;
}

function CreateReviewScreenWithData({
  navigation,
}: CreateReviewScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<CreateReviewQueryType>(
    CreateReviewQuery,
    preloadedQueries!.CreateReview.queryRef!,
  );

  const [commitMutation, isPending] =
    useMutation<CreateReviewMutationType>(CreateReviewMutation);

  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState<string | undefined>(undefined);
  const [content, setContent] = useState('');
  const [score, setScore] = useState(0);

  const [displayError, setDisplayError] = useState(false);

  function onCreateReview() {
    if (
      title === '' ||
      content === '' ||
      (externalUrl && !validator.isURL(externalUrl))
    ) {
      return setDisplayError(true);
    }

    if (!data.movie) {
      return;
    }

    commitMutation({
      variables: {
        input: {
          movieId: data.movie.id,
          title,
          content,
          score,
          externalUrl,
        },
      },
      onCompleted: resp => {
        const errorMessage = resp.createReview.message;
        if (errorMessage) {
          return Snackbar.show({text: errorMessage});
        }

        if (data.movie) {
          preloadedQueries?.MovieReviewList.loadQuery(
            {id: data.movie.id},
            {fetchPolicy: 'network-only'},
          );
          preloadedQueries?.MyAccount.loadQuery(
            {},
            {fetchPolicy: 'network-only'},
          );
        }
        Snackbar.show({text: 'Review posted!'});
        navigation.navigate('MovieReviewList', {firstTab: 'personal'});
      },
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MovieInfoDisplay movie={data.movie} displayScore={true} />
      <View style={styles.inputContainer}>
        <ReviewEditor
          displayError={displayError}
          title={title}
          onTitleChanged={setTitle}
          externalUrl={externalUrl}
          onExternalUrlChanged={setExternalUrl}
          score={score}
          onScoreChanged={setScore}
          content={content}
          onContentChanged={setContent}
        />
        <Button containerStyle={styles.createButton} onPress={onCreateReview}>
          {isPending ? <ButtonLoadingIcon /> : 'Create'}
        </Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 20,
  },
  inputContainer: {
    gap: 20,
  },
  createButton: {
    flex: 1,
  },
});
