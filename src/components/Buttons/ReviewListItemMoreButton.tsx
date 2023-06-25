import React from 'react';
import {OnPressItem} from '../../dialogs/GenericBottomSheetHandleItemPressDialog';
import {GenericMoreButton} from './GenericMoreButton';
import {StyleProp, ViewStyle} from 'react-native';

interface ReviewListItemMoreButtonProps {
  onSelectedItem: OnPressItem;
  style?: StyleProp<ViewStyle>;
}

const list = [
  {id: 'hide', title: 'Hide review'},
  {id: 'open', title: 'Go to review details'},
  {id: 'share', title: 'Share this review'},
];
/**
 * @using display moreButton, when toggle button it will show the option of ReviewListItem
 * @param {OnPressItem} onSelectedType Receive selection result of the list
 * @param {StyleProp<ViewStyle>} style Style
 */
export function ReviewListItemMoreButton(
  props: ReviewListItemMoreButtonProps,
): JSX.Element {
  return (
    <GenericMoreButton
      onSelectedItem={item => props.onSelectedItem(item)}
      list={list}
      style={props.style}
    />
  );
}
