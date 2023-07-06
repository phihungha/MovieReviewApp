import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalProfileDisplay} from '../../Display/VerticalProfileDisplay';
import {ItemTitleOnly} from '../BottomSheetListItem';
import {CommentListItemMoreButton} from './components/CommentListItemMoreButton';
import {ItemTitleText} from '../../Text/ItemTitleText';
import {ItemSubtitleText} from '../../Text/ItemSubtitleText';
import {RegularText} from '../../Text/RegularText';
import colors from '../../../styles/colors';
import {graphql} from 'relay-runtime';
import {CommentListItem$key} from './__generated__/CommentListItem.graphql';
import {useFragment} from 'react-relay';
import {dateToStandardDateTimeFormat} from '../../../utils/time-conversion';

const CommentListItemFragment = graphql`
  fragment CommentListItem on Comment {
    author {
      avatarUrl
      name
    }
    postTime
    content
  }
`;

export interface CommentListItemProps {
  comment: CommentListItem$key | null;
}

/**
 * Item for list of review comments.
 */
export function CommentListItem({comment}: CommentListItemProps): JSX.Element {
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'hide':
        console.log('hide comment');
        break;
      case 'delete':
        console.log('delete comment');
        break;
      case 'report':
        console.log('report comment');
        break;
      case 'edit':
        console.log('edit comment');
        break;
    }
  };

  const data = useFragment(CommentListItemFragment, comment);

  return (
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
        <RegularText>{data?.content ?? 'N/A'}</RegularText>
        <CommentListItemMoreButton onSelectedItem={onSelectedItem} />
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
});
