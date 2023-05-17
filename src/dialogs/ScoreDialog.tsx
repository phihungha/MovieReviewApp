import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {Button} from '@rneui/themed';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {styles} from '../styles/styles';
import {
  CustomSliderMarkerLeft,
  CustomSliderMarkerRight,
} from './CustomSliderMarker';
import {NoDialogButton, YesDialogButton} from '../components/DialogButtons';

export type OnRangeSelectedCb = (min: number, max: number) => void;

export interface ScoreDialogProps {
  openBtnTitle: string;
  onRangeSelected: OnRangeSelectedCb;
}

/**
 * Dialog to select review score range.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {OnRangeSelectedCb} onRangeSelected Receive selection result
 * @example
 * <ScoreDialog
 *  openBtnTitle='Open Dialog'
 *  onRangeSelected={(min, max) => console.log(min, max)} />
 */
export function ScoreDialog(props: ScoreDialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => setVisible(!visible);
  const buttonPressed = () => toggleDialog();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const sliderValueChanged = (values: any) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const yesPressed = () => {
    props.onRangeSelected(minValue, maxValue);
    toggleDialog();
  };

  return (
    <View>
      <Button
        buttonStyle={styles.buttonOpenDialogStyle}
        onPress={buttonPressed}>
        <RegularText>{props.openBtnTitle} </RegularText>
      </Button>
      <Dialog
        overlayStyle={scoreDialogStyles.container}
        style={scoreDialogStyles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title
          titleStyle={styles.titleTextDialog}
          title="Select score range"
        />
        <View style={scoreDialogStyles.containerInput}>
          <MultiSlider
            values={[minValue, maxValue]}
            isMarkersSeparated={true}
            enabledTwo={true}
            enabledOne={true}
            trackStyle={{}}
            min={0}
            max={10}
            step={1}
            sliderLength={200}
            onValuesChange={sliderValueChanged}
            customMarkerLeft={e => (
              <CustomSliderMarkerLeft currentValue={e.currentValue} />
            )}
            customMarkerRight={e => (
              <CustomSliderMarkerRight currentValue={e.currentValue} />
            )}
          />
        </View>
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

const scoreDialogStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlack,
    paddingVertical: 12,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});
