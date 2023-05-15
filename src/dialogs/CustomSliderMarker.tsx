import {StyleSheet, View} from 'react-native';
import {SliderProps} from '../props/SliderProps';
import {RegularText} from '../components/RegularText';

export function CustomSliderMarkerLeft(props: SliderProps): JSX.Element {
  return (
    <View style={markerStyles.container}>
      <RegularText>Min</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}
export function CustomSliderMarkerRight(props: SliderProps): JSX.Element {
  return (
    <View style={markerStyles.container}>
      <RegularText>Max</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}

const markerStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
