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
import {validateUrl} from '../../utils/url-check';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';

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

  const [commitMutation, isPending] =
    useMutation<EditReviewMutationType>(EditReviewMutation);

  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState<string | undefined>(undefined);
  const [content, setContent] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTitle(data.review?.title ?? '');
    setExternalUrl(data.review?.externalUrl ?? undefined);
    setContent(data.review?.content ?? '');
    setScore(data.review?.score ?? 0);
  }, [data]);

  const onSave = () => {
    if (title.length < 1) {
      return Snackbar.show({text: 'Title cannot be empty'});
    }

    if (content.length < 1) {
      return Snackbar.show({text: 'Content cannot be empty'});
    }

    if (externalUrl && !validateUrl(externalUrl)) {
      return Snackbar.show({text: 'Invalid external URL'});
    }

    if (!data.review) {
      return;
    }

    commitMutation({
      variables: {
        id: data.review.id,
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

        if (data.review) {
          preloadedQueries?.MovieReviewList.loadQuery(
            {id: data.review.movie.id},
            {fetchPolicy: 'network-only'},
          );
        }
        Snackbar.show({text: 'Review edited!'});
        navigation.goBack();
      },
    });
  };

  const onDelete = () => {
    console.log('Call API Delete');
  };

  const customOpenButton = useCallback((onPress: ActionCb) => {
    const buttonWidth = (Dimensions.get('window').width - 40) / 2 - 2;
    return (
      <Button
        title="Delete"
        containerStyle={[styles.deleteButton, {width: buttonWidth}]}
        buttonStyle={{backgroundColor: colors.mediumBlack}}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MovieInfoDisplay movie={data.review?.movie ?? null} />
      <View style={styles.inputContainer}>
        <ReviewEditor
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
            {isPending ? <ButtonLoadingIcon /> : 'Save'}
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
    borderRadius: 8,
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
