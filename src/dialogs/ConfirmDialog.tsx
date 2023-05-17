import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog, Button} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {styles} from '../styles/styles';
import {ActionCb} from '../types/ActionCb';
import {NoDialogButton, YesDialogButton} from '../components/DialogButtons';

export interface ConfirmDialogProps {
  action: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
}

/**
 * Dialog to confirm something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title
 * @param {string} message Message
 * @param {ActionCb} action Action when confirm
 * @example
 * <DeleteCommentDialog
 *   openBtnTitle='Open Dialog'
 *   action={() => console.log('action')} />
 */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element {
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
        overlayStyle={deleteCommentDialogStyles.container}
        style={deleteCommentDialogStyles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title titleStyle={styles.titleTextDialog} title={props.title} />
        <RegularText>{props.message}</RegularText>
        <Dialog.Actions>
          <View style={styles.containerButtonDialog}>
            <NoDialogButton onPress={() => setVisible(false)} />
            <YesDialogButton onPress={yesPressed} />
          </View>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const deleteCommentDialogStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
  },
});
