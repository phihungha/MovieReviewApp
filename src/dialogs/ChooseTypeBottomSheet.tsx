import React, {useState} from 'react';
import {GenericBottomSheetDialog} from './GenericBottomSheetDialog';
import {
  BottomSheetListItem,
  ItemData,
} from '../components/Items/BottomSheetListItem';

const list = [
  {id: 1, title: 'Critic'},
  {id: 2, title: 'Regular'},
];

type OnSelectedType = (type: ItemData) => void;

interface ChooseFavoriteGenresDialogProps {
  onSelectedType: OnSelectedType;
  iconColor?: string;
  iconSize?: number;
}

export function ChooseTypeBottomSheet(
  props: ChooseFavoriteGenresDialogProps,
): JSX.Element {
  const [visible, setVisible] = useState(false);

  const renderItem = ({item}: {item: ItemData}) => {
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
  const onPressItem = ({item}: {item: ItemData}) => {
    props.onSelectedType(item);
    closeDialog();
  };
  return (
    <GenericBottomSheetDialog
      iconName="account-tie"
      iconColor={props.iconColor}
      iconSize={props.iconSize}
      listItem={list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onPressIcon={openDialog}
      onBackdropPress={onBackdropPress}
      isVisible={visible}
    />
  );
}
