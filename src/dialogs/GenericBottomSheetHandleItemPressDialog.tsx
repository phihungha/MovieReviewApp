import React, {useState} from 'react';
import {
  BottomSheetListItem,
  ItemTitleOnly,
} from '../components/Items/BottomSheetListItem';
import {GenericBottomSheetDialog} from './GenericBottomSheetDialog';

export type OnPressItem = (item: ItemTitleOnly) => void;

export interface EventBottomSheetProps {
  onPressItemBottomSheet: OnPressItem;
  iconColor?: string;
  iconSize?: number;
  iconName: string;
  listItem: {}[];
}

/**
 * @using generic component having event item press for bottom sheet
 * @param {OnPressItem} onPressItemBottomSheet Receive selection item result
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 * @param {string} iconName icon's name
 * @param {{}[]} listItem list item want to display on BottomSheet
 */
export function GenericBottomSheetHandleItemPressDialog(
  props: EventBottomSheetProps,
): JSX.Element {
  const [visible, setVisible] = useState(false);

  const renderItem = ({item}: {item: ItemTitleOnly}) => {
    return (
      <BottomSheetListItem
        item={item}
        onPressItem={() => onPressItem({item})}
      />
    );
  };
  const keyExtractor = (item: any) => {
    return item.title;
  };

  const closeDialog = () => {
    setVisible(false);
  };
  const openDialog = () => {
    setVisible(true);
  };
  const onBackdropPress = () => {
    closeDialog();
  };
  const onPressItem = ({item}: {item: ItemTitleOnly}) => {
    props.onPressItemBottomSheet(item);
    closeDialog();
  };
  return (
    <GenericBottomSheetDialog
      iconName={props.iconName}
      iconColor={props.iconColor}
      iconSize={props.iconSize}
      listItem={props.listItem}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onPressIcon={openDialog}
      onBackdropPress={onBackdropPress}
      isVisible={visible}
    />
  );
}
