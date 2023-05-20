import React from 'react';
import {Dialog} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';
import {DialogButtonProps} from '../../props/DialogButtonProps';

export function CancelDialogButton(props: DialogButtonProps) {
  return (
    <Dialog.Button
      title="CANCEL"
      buttonStyle={styles.noDialogButton}
      titleStyle={styles.subTextDialog}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  noDialogButton: {
    borderRadius: 12,
    backgroundColor: 'none',
    borderWidth: 0.5,
    borderColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  titleTextDialog: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.lg,
    textAlign: 'left',
  },
  subTextDialog: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    textAlign: 'left',
  },
});
