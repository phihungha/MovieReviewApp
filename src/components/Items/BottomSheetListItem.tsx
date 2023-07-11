import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';
import {ConfirmDialog} from '../../dialogs/ConfirmDialog';
import {ActionCb} from '../../types/ActionCb';
import {Button} from '@rneui/themed';
import {RegularText} from '../Text/RegularText';

type OnPress = () => void;

export interface ItemTitleOnly {
  id: string;
  title: string;
}

interface ItemProps {
  item: ItemTitleOnly;
  onPressItem: OnPress;
  onOk: ActionCb;
}

export function BottomSheetListItem(props: ItemProps): JSX.Element {
  const customOpenButton = useCallback(
    (onPress: ActionCb) => (
      <Button buttonStyle={styles.item} onPress={onPress}>
        <RegularText>Delete</RegularText>
      </Button>
    ),
    [],
  );

  if (props.item.id === 'delete') {
    return (
      <ConfirmDialog
        onOk={() => props.onOk()}
        title={'Warning!'}
        message={'Are your want to delete this comment?'}
        openBtnTitle={'Delete'}
        customOpenButton={onPress => customOpenButton(onPress)}
      />
    );
  }
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.95}
      onPress={props.onPressItem}>
      <Text style={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontFamily: fonts.primary,
  },
  buttonOpenDialogStyle: {
    backgroundColor: colors.mediumBlack,
  },
});
