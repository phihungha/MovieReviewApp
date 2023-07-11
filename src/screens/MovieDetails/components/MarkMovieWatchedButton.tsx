import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {graphql} from 'relay-runtime';
import {MarkMovieWatchedButton$key} from './__generated__/MarkMovieWatchedButton.graphql';
import {useFragment, useMutation} from 'react-relay';
import type {MarkMovieWatchedButtonMutation as MarkMovieWatchedButtonMutationType} from './__generated__/MarkMovieWatchedButtonMutation.graphql';

const MarkMovieWatchedButtonFragment = graphql`
  fragment MarkMovieWatchedButton on Movie {
    id
    isViewedByViewer
  }
`;

const MarkMovieWatchedButtonMutation = graphql`
  mutation MarkMovieWatchedButtonMutation($id: ID!, $isViewed: Boolean!)
  @raw_response_type {
    markMovieAsViewed(id: $id, isViewed: $isViewed) {
      ... on MutationMarkMovieAsViewedSuccess {
        data {
          ...MarkMovieWatchedButton
        }
      }
    }
  }
`;

export interface MarkMovieWatchedButtonProps {
  movie: MarkMovieWatchedButton$key | null;
}

export function MarkMovieWatchedButton({
  movie,
}: MarkMovieWatchedButtonProps): React.JSX.Element {
  const data = useFragment(MarkMovieWatchedButtonFragment, movie);
  const [commitMutation] = useMutation<MarkMovieWatchedButtonMutationType>(
    MarkMovieWatchedButtonMutation,
  );

  function onMarkWatched() {
    if (!data) {
      return;
    }
    commitMutation({
      variables: {
        id: data.id,
        isViewed: !data.isViewedByViewer,
      },
      optimisticResponse: {
        markMovieAsViewed: {
          __typename: 'MutationMarkMovieAsViewedSuccess',
          data: {
            id: data.id,
            isViewedByViewer: !data.isViewedByViewer,
          },
        },
      },
    });
  }

  return (
    <Button
      onPress={onMarkWatched}
      containerStyle={style.containerStyle}
      icon={{
        type: 'ionicon',
        name: 'eye',
        size: 28,
        color: colors.white,
      }}
      buttonStyle={[
        style.buttonStyle,
        data?.isViewedByViewer
          ? style.buttonStyle_marked
          : style.buttonStyle_not_marked,
      ]}
    />
  );
}

const style = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    right: 30,
    top: -30,
  },
  buttonStyle: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  buttonStyle_not_marked: {
    backgroundColor: colors.primary,
  },
  buttonStyle_marked: {
    backgroundColor: colors.green,
  },
});
