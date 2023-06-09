import React, {useState} from 'react';
import {GenericBottomSheetDialog} from './GenericBottomSheetDialog';
import {
  BottomSheetListItem,
  ItemTitleOnly,
} from '../components/Items/BottomSheetListItem';

const list = [
  {id: 1, title: 'Genre 1'},
  {id: 2, title: 'Genre 2'},
  {id: 3, title: 'Genre 3'},
  {id: 4, title: 'Genre 4'},
  {id: 5, title: 'Genre 5'},
  {id: 6, title: 'Genre 6'},
  {id: 7, title: 'Genre 7'},
  {id: 8, title: 'Genre 8'},
  {id: 9, title: 'Genre 9'},
  {id: 10, title: 'Genre 10'},
  {id: 11, title: 'Genre 11'},
  {id: 12, title: 'Genre 12'},
  {id: 13, title: 'Genre 13'},
  {id: 14, title: 'Genre 14'},
  {id: 15, title: 'Genre 15'},
];

type OnSelectedGenre = (country: ItemTitleOnly) => void;

interface ChooseFavoriteGenresDialogProps {
  onSelectedGenre: OnSelectedGenre;
  iconColor?: string;
  iconSize?: number;
}

export function ChooseFavoriteGenresBottomSheetDialog(
  props: ChooseFavoriteGenresDialogProps,
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
    props.onSelectedGenre(item);
    closeDialog();
  };
  return (
    <GenericBottomSheetDialog
      iconName="view-list"
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
