import React from 'react';
import {OnPressItem} from '../../dialogs/GenericBottomSheetHandleItemPressDialog';
import {GenericMoreButton} from './GenericMoreButton';
import {StyleProp, ViewStyle} from 'react-native';

interface CommentListItemMoreButtonProps {
  onSelectedItem: OnPressItem;
  style?: StyleProp<ViewStyle>;
}

const list = [
  {id: 'hide', title: 'Hide this comment'},
  {id: 'delete', title: 'Delete this comment'},
  {id: 'report', title: 'Report this comment'},
  {id: 'edit', title: 'Edit this comment'},
];
/**
 * @using display moreButton, when toggle button it will show the option of CommentListItem
 * @param {OnPressItem} onSelectedType Receive selection result of the list
 * @param {StyleProp<ViewStyle>} style Style
 */
export function CommentListItemMoreButton(
  props: CommentListItemMoreButtonProps,
): JSX.Element {
  return (
    <GenericMoreButton
      onSelectedItem={item => props.onSelectedItem(item)}
      list={list}
      style={props.style}
    />
  );
}
