import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Button} from '@rneui/themed';
import colors from '../../styles/colors';
import {ConfirmDialog} from '../../dialogs/ConfirmDialog';
import {ActionCb} from '../../types/ActionCb';
import {MovieInfoDisplay} from '../../components/Display/MovieInfoDisplay';
import {ReviewEditor} from './components/ReviewEditor';
import {graphql} from 'relay-runtime';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigators/MainStackParams';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import type {EditReviewQuery as EditReviewQueryType} from './__generated__/EditReviewQuery.graphql';
import {useMutation, usePreloadedQuery} from 'react-relay';
import type {EditReviewMutation as EditReviewMutationType} from './__generated__/EditReviewMutation.graphql';
import Snackbar from 'react-native-snackbar';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';
import type {EditReviewDeleteMutation as EditReviewDeleteMutationType} from './__generated__/EditReviewDeleteMutation.graphql';
import validator from 'validator';

export const EditReviewQuery = graphql`
  query EditReviewQuery($id: ID!) {
    review(id: $id) {
      id
      title
      content
      externalUrl
      score
      movie {
        id
        ...MovieInfoDisplay
      }
    }
  }
`;

const EditReviewMutation = graphql`
  mutation EditReviewMutation($id: ID!, $input: EditReviewInput!) {
    editReview(id: $id, input: $input) {
      ... on MutationEditReviewSuccess {
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

      ... on ValidationError {
        message
      }
    }
  }
`;

const EditReviewDeleteMutation = graphql`
  mutation EditReviewDeleteMutation($id: ID!) {
    deleteReview(id: $id) {
      ... on MutationDeleteReviewSuccess {
        data {
          id
          movie {
            ...CriticAggregateScoreIndicator
            ...RegularAggregateScoreIndicator
            ...ScoreCountChart
            ...GenderScoreChart
            ...AgeScoreChart
          }
        }
      }
    }
  }
`;

type EditReviewScreenProps = NativeStackScreenProps<
  MainStackParams,
  'EditReview'
>;

export function EditReviewScreen(props: EditReviewScreenProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.EditReview.queryRef) {
    return <></>;
  }
  return <EditReviewScreenWithData {...props} />;
}

function EditReviewScreenWithData({
  navigation,
}: EditReviewScreenProps): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<EditReviewQueryType>(
    EditReviewQuery,
    preloadedQueries!.EditReview.queryRef!,
  );
  const review = data.review;
  const reviewId = review?.id;

  const [commitEditMutation, isEditPending] =
    useMutation<EditReviewMutationType>(EditReviewMutation);
  const [commitDeleteMutation, isDeletePending] =
    useMutation<EditReviewDeleteMutationType>(EditReviewDeleteMutation);

  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState<string | undefined>(undefined);
  const [content, setContent] = useState('');
  const [score, setScore] = useState(0);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    setTitle(data.review?.title ?? '');
    setExternalUrl(data.review?.externalUrl ?? undefined);
    setContent(data.review?.content ?? '');
    setScore(data.review?.score ?? 0);
  }, [data]);

  function onSave() {
    if (
      title === '' ||
      content === '' ||
      (externalUrl && !validator.isURL(externalUrl))
    ) {
      return setDisplayError(true);
    }

    if (!reviewId) {
      return;
    }

    commitEditMutation({
      variables: {
        id: reviewId,
        input: {
          title,
          content,
          score,
          externalUrl,
        },
      },
      onCompleted: resp => {
        const errorMessage = resp.editReview.message;
        if (errorMessage) {
          return Snackbar.show({text: errorMessage});
        }

        if (review) {
          preloadedQueries?.MovieReviewList.loadQuery(
            {id: review.movie.id},
            {fetchPolicy: 'network-only'},
          );
        }
        Snackbar.show({text: 'Review edited!'});
        navigation.goBack();
      },
    });
  }

  function onDelete() {
    if (reviewId && review) {
      commitDeleteMutation({
        variables: {id: reviewId},
        onCompleted: () => {
          if (review) {
            preloadedQueries?.MovieReviewList.loadQuery(
              {id: review.movie.id},
              {fetchPolicy: 'network-only'},
            );
            preloadedQueries?.MyAccount.loadQuery(
              {},
              {fetchPolicy: 'network-only'},
            );
          }
          Snackbar.show({text: 'Review deleted!'});
          navigation.replace('MovieReviewList', {firstTab: 'personal'});
        },
      });
    }
  }

  const customOpenButton = useCallback(
    (onPress: ActionCb) => {
      const buttonWidth = (Dimensions.get('window').width - 40) / 2 - 2;
      return (
        <Button
          containerStyle={[styles.deleteButton, {width: buttonWidth}]}
          buttonStyle={styles.deleteButton}
          onPress={onPress}>
          {isDeletePending ? <ButtonLoadingIcon /> : 'Delete'}
        </Button>
      );
    },
    [isDeletePending],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MovieInfoDisplay
        movie={data.review?.movie ?? null}
        displayScore={true}
      />
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
        <View style={styles.buttonContainer}>
          <ConfirmDialog
            onOk={onDelete}
            title="Warning!"
            message={'Do you want to delete this review?'}
            customOpenButton={onPress => customOpenButton(onPress)}
          />
          <Button containerStyle={[styles.saveButton]} onPress={onSave}>
            {isEditPending ? <ButtonLoadingIcon /> : 'Save'}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
  },
  inputContainer: {
    gap: 20,
  },
  deleteButton: {
    backgroundColor: colors.mediumBlack,
  },
  saveButton: {
    borderRadius: 8,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
});
