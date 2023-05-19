import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog, Button} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {ActionCb} from '../types/ActionCb';
import {CancelDialogButton, OkDialogButton} from '../components/DialogButtons';
import {fontSizes, fonts} from '../styles/typography';

export interface DialogProps {
  onOk: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
  children?: React.ReactNode;
}

/**
 * Basic Ok/Cancel dialog that asks something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title of the dialog
 * @param {string} message Message
 * @param {ActionCb} onOk Action on pressing Ok
 * @param {React.ReactNode} children Content to display in the dialog
 * @example
 * <DeleteCommentDialog
 *   openBtnTitle='Open Dialog'
 *   action={() => console.log('action')} />
 */
export function GenericDialog(props: DialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => setVisible(!visible);
  const buttonPressed = () => toggleDialog();

  const okPressed = () => {
    props.onOk();
    toggleDialog();
  };

  return (
    <View>
      <Button
        buttonStyle={styles.buttonOpenDialogStyle}
        onPress={buttonPressed}>
        <RegularText>{props.openBtnTitle}</RegularText>
      </Button>
      <Dialog
        overlayStyle={styles.container}
        style={styles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title titleStyle={styles.titleTextDialog} title={props.title} />
        <RegularText>{props.message}</RegularText>
        {props.children}
        <Dialog.Actions>
          <View style={styles.containerButtonDialog}>
            <CancelDialogButton onPress={() => setVisible(false)} />
            <OkDialogButton onPress={okPressed} />
          </View>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
  },
  buttonOpenDialogStyle: {
    backgroundColor: colors.mediumBlack,
    borderRadius: 8,
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
  containerButtonDialog: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});
