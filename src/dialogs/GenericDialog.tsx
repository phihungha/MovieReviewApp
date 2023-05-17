import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog, Button} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {ActionCb} from '../types/ActionCb';
import {CancelDialogButton, OkDialogButton} from '../components/DialogButtons';
import {fontSizes, fonts} from '../styles/typography';

export interface DialogProps {
  action: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
  children?: React.ReactNode;
}

/**
 * Dialog to confirm something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title
 * @param {string} message Message
 * @param {ActionCb} action Action on confirm
 * @example
 * <DeleteCommentDialog
 *   openBtnTitle='Open Dialog'
 *   action={() => console.log('action')} />
 */
export function GenericDialog(props: DialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => setVisible(!visible);
  const buttonPressed = () => toggleDialog();

  const yesPressed = () => {
    props.action();
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
            <OkDialogButton onPress={yesPressed} />
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
    fontFamily: fonts.primary_bold,
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
