import React, {useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../styles/colors';
import {Dialog, Button} from '@rneui/themed';
import {RegularText} from '../components/Text/RegularText';
import {ActionCb} from '../types/ActionCb';
import {fontSizes, fonts} from '../styles/typography';
import {CancelDialogButton} from '../components/Buttons/CancelDialogButton';
import {OkDialogButton} from '../components/Buttons/OkDialogButton';
import {CustomButtonCb} from '../types/CustomButtonCb';

export interface DialogProps {
  title: string;
  openBtnTitle?: string;
  onOk?: ActionCb;
  message?: string;
  containerStyle?: StyleProp<ViewStyle>;
  customOpenButton?: CustomButtonCb;
  children?: React.ReactNode;
}

/**
 * Basic Ok/Cancel dialog that asks something.
 * @param {string} title Title of the dialog
 * @param {string?} openBtnTitle Title of dialog open button
 * @param {string?} message Message
 * @param {ActionCb?} onOk Action on pressing Ok
 * @param {StyleProp<ViewStyle>?} containerStyle Container style
 * @param {CustomButtonCb?} customOpenButton Custom open button component passed as a function
 * @param {React.ReactNode?} children Content to display in the dialog
 */
export function GenericDialog(props: DialogProps): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };

  const okPressed = () => {
    props.onOk?.();
    toggleDialog();
  };

  const defaultOpenButton = (
    <Button buttonStyle={styles.buttonOpenDialogStyle} onPress={toggleDialog}>
      <RegularText>{props.openBtnTitle}</RegularText>
    </Button>
  );
  const dialogOpenButton =
    props.customOpenButton?.(toggleDialog) ?? defaultOpenButton;

  return (
    <View>
      {dialogOpenButton}
      <Dialog
        overlayStyle={[styles.container, props.containerStyle]}
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
    paddingHorizontal: 12,
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
