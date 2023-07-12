import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {graphql} from 'relay-runtime';
import {CreateReviewScoreInput} from './components/CreateReviewScoreInput';
import {useMutation, usePreloadedQuery} from 'react-relay';
import type {CreateReviewMutation as CreateReviewMutationType} from './__generated__/CreateReviewMutation.graphql';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';
import {CreateReviewMovieInfo} from './components/CreateReviewMovieInfo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import type {CreateReviewQuery as CreateReviewQueryType} from './__generated__/CreateReviewQuery.graphql';

export const CreateReviewQuery = graphql`
  query CreateReviewQuery($id: ID!) {
    movie(id: $id) {
      id
      ...CreateReviewMovieInfo
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

export function CreateReviewScreen(props: CreateReviewScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.CreateReview.queryRef) {
    return <></>;
  }
  return <CreateReviewScreenWithData {...props} />;
}

function CreateReviewScreenWithData({
  navigation,
}: CreateReviewScreenProps): JSX.Element {
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

  const onCreateReview = () => {
    if (!data.movie) {
      return;
    }

    commitMutation({
      variables: {
        input: {
          title,
          content,
          score,
          externalUrl,
          movieId: data.movie.id,
        },
      },
      onCompleted: resp => {
        if (resp.createReview.message) {
          console.log(resp.createReview.message);
          return;
        }

        if (data.movie) {
          preloadedQueries?.MovieReviewList.loadQuery(
            {id: data.movie.id},
            {fetchPolicy: 'network-only'},
          );
        }
        navigation.navigate('MovieReviewList', {});
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CreateReviewMovieInfo movie={data.movie} />

      <View style={styles.inputContainer}>
        <CreateReviewScoreInput score={score} onScoreChanged={setScore} />

        <Input
          value={title}
          onChangeText={i => setTitle(i)}
          placeholder="Enter a title..."
          label={'Title'}
          renderErrorMessage={false}
        />

        <Input
          value={externalUrl}
          onChangeText={i => setExternalUrl(i === '' ? undefined : i)}
          placeholder="Enter a external url..."
          label={'External URL'}
          renderErrorMessage={false}
        />

        <Input
          value={content}
          onChangeText={i => setContent(i)}
          placeholder="Enter content..."
          label={'Content'}
          inputStyle={styles.contentInput}
          multiline
          renderErrorMessage={false}
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
  contentInput: {
    height: 150,
  },
  inputContainer: {
    gap: 20,
  },
  createButton: {
    flex: 1,
  },
});
