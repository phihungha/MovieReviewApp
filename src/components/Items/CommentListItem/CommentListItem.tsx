import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
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
import {Input} from '@rneui/themed';
import {pressableRippleConfig} from '../../../styles/pressable-ripple';

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
  const [isEnabledEdit, setEnabledEdit] = useState(false);
  const onSelectedItem = (item: ItemTitleOnly) => {
    switch (item.id) {
      case 'delete':
        break;
      case 'edit':
        setEnabledEdit(true);
        break;
    }
  };

  const updateComment = () => {
    setEnabledEdit(false);
    console.log('Call API');
  };

  const cancelEdit = () => {
    setEnabledEdit(false);
  };

  const data = useFragment(CommentListItemFragment, comment);
  const [commentText, setCommentText] = useState(data?.content);
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
          {isEnabledEdit ? (
            <View style={styles.editContainer}>
              <Input
                value={commentText}
                onChangeText={setCommentText}
                containerStyle={styles.input_containerStyle}
                inputContainerStyle={styles.input_inputContainerStyle}
                renderErrorMessage={false}
              />
              <View style={styles.okCancelContainer}>
                <Pressable
                  onPress={cancelEdit}
                  android_ripple={pressableRippleConfig}>
                  <ItemSubtitleText style={styles.okCancelText}>
                    Cancel
                  </ItemSubtitleText>
                </Pressable>
                <Pressable
                  onPress={updateComment}
                  android_ripple={pressableRippleConfig}>
                  <ItemSubtitleText style={styles.okCancelText}>
                    Ok
                  </ItemSubtitleText>
                </Pressable>
              </View>
            </View>
          ) : (
            <RegularText>{data?.content ?? 'N/A'}</RegularText>
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
