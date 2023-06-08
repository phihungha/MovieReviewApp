// import React, {useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// type OnSelectedDate = (date: Date) => void;

// interface DatePickerDialogProps {
//   iconName: string;
//   onSelectedDate: OnSelectedDate;
//   iconColor?: string;
//   iconSize?: number;
// }

// export function DatePickerDialog(props: DatePickerDialogProps): JSX.Element {
//   const [date, setDate] = useState(new Date());
//   const [visible, setVisible] = useState(false);

//   const onChange = (event: any, selectedDate: any) => {
//     const currentDate = selectedDate || date;
//     setVisible(false);
//     setDate(currentDate);

//     props.onSelectedDate(currentDate);
//   };

//   const openDialog = () => {
//     setVisible(true);
//   };

//   return (
//     <Icon
//       name={props.iconName}
//       color={props.iconColor}
//       size={props.iconSize}
//       style={styles.container}
//       onPress={openDialog}>
//       {visible && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           is24Hour
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </Icon>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View} from 'react-native';

type OnSelectedDate = (date: Date) => void;

interface DatePickerDialogProps {
  iconName: string;
  onSelectedDate: OnSelectedDate;
}

export function DatePickerDialog(props: DatePickerDialogProps): JSX.Element {
  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    props.onSelectedDate(currentDate);
  };

  return (
    <View>
      <DateTimePicker
        value={date}
        mode="date"
        is24Hour
        display="default"
        onChange={onChange}
      />
    </View>
  );
}
