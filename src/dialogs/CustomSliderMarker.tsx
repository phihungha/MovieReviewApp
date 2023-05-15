import {View} from 'react-native';
import {SliderProps} from '../props/SliderProps';
import {RegularText} from '../components/RegularText';

export function CustomSliderMarkerLeft(props: SliderProps): JSX.Element {
  return (
    <View>
      <RegularText>Min</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}
export function CustomSliderMarkerRight(props: SliderProps): JSX.Element {
  return (
    <View>
      <RegularText>Max</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}
