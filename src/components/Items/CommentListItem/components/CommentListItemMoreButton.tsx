import React from 'react';
import {OnPressItem} from '../../../../dialogs/GenericBottomSheetHandleItemPressDialog';
import {GenericMoreButton} from '../../../Buttons/GenericMoreButton';
import {StyleProp, ViewStyle} from 'react-native';

interface CommentListItemMoreButtonProps {
  onSelectedItem: OnPressItem;
  style?: StyleProp<ViewStyle>;
}

const list = [
  {id: 'delete', title: 'Delete'},
  {id: 'edit', title: 'Edit'},
];

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
