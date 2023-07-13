import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalProfileDisplay} from '../../Display/VerticalProfileDisplay';
import {ItemTitleOnly} from '../BottomSheetListItem';
import {CommentListItemMoreButton} from './components/CommentListItemMoreButton';
import {ItemTitleText} from '../../Text/ItemTitleText';
import {ItemSubtitleText} from '../../Text/ItemSubtitleText';
import colors from '../../../styles/colors';
import {graphql} from 'relay-runtime';
import {CommentListItem$key} from './__generated__/CommentListItem.graphql';
import {useFragment} from 'react-relay';
import {dateToStandardDateTimeFormat} from '../../../utils/time-conversion';
import {CommentEditor} from './components/CommentEditor';
import {CommentContent} from './components/CommentContent';

const CommentListItemFragment = graphql`
  fragment CommentListItem on Comment {
    author {
      avatarUrl
      name
    }
    postTime
    ...CommentContent
    ...CommentEditor
  }
`;

export interface CommentListItemProps {
  comment: CommentListItem$key | null;
}

/**
 * Item for list of review comments.
 */
export function CommentListItem({comment}: CommentListItemProps): JSX.Element {
  const data = useFragment(CommentListItemFragment, comment);

  const [isEditMode, setEditMode] = useState(false);
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'delete':
        break;
      case 'edit':
        setEditMode(true);
        break;
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <VerticalProfileDisplay
          style={styles.avatarContainer}
          imageUrl={data?.author.avatarUrl}
        />
        <View style={styles.infoContainer}>
          <ItemTitleText>{data?.author.name ?? 'N/A'}</ItemTitleText>
          <ItemSubtitleText>
            {dateToStandardDateTimeFormat(new Date(data?.postTime))}
          </ItemSubtitleText>
          {isEditMode ? (
            <CommentEditor
              comment={data}
              onDisable={() => setEditMode(false)}
            />
          ) : (
            <CommentContent comment={data} />
          )}

          <CommentListItemMoreButton onSelectedItem={onSelectedItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
  },
  avatarContainer: {
    alignSelf: 'flex-start',
  },
  bottomSheet: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  editContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  input_containerStyle: {
    flex: 1,
  },
  input_inputContainerStyle: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  okCancelContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  okCancelText: {
    color: colors.blue,
  },
});
