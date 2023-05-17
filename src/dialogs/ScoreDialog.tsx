import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  CustomSliderMarkerLeft,
  CustomSliderMarkerRight,
} from './CustomSliderMarker';
import {GenericDialog} from './GenericDialog';

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
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const sliderValueChanged = (values: any) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const yesPressed = () => props.onRangeSelected(minValue, maxValue);

  return (
    <View>
      <GenericDialog
        openBtnTitle={props.openBtnTitle}
        title="Select score range"
        message="Please select min and max scores"
        onConfirm={yesPressed}>
        <View style={styles.container}>
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
      </GenericDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});
