import React from 'react';
import {
  GenericBottomSheetHandleItemPressDialog,
  OnPressItem,
} from '../../dialogs/GenericBottomSheetHandleItemPressDialog';
import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import colors from '../../styles/colors';
import {pressableRippleConfig} from '../../styles/pressable-ripple';
import {ActionCb} from '../../types/ActionCb';

interface GenericMoreButtonProps {
  onSelectedItem: OnPressItem;
  list: {}[];
  style?: StyleProp<ViewStyle>;
  onOK: ActionCb;
}

/**
 * @using generic more button, use for more button of CommentListItem or ReviewListItem
 * @param {OnPressItem} onSelectedItem Receive selection result of the list
 * @param {{}[]} list list item
 * @param {StyleProp<ViewStyle>} style Style
 */
export function GenericMoreButton(props: GenericMoreButtonProps): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      style={[styles.buttonPosition, props.style]}>
      <GenericBottomSheetHandleItemPressDialog
        onPressItemBottomSheet={item => props.onSelectedItem(item)}
        listItem={props.list}
        iconName="dots-vertical"
        iconColor={colors.white}
        iconSize={24}
        onOk={() => props.onOK()}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPosition: {
    position: 'absolute',
    right: 8,
    top: 12,
  },
});
