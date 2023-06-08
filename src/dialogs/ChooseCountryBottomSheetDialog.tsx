import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {BottomSheet} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

interface BottomSheetDialogProps {
  iconColor?: string;
  iconSize?: number;
}

interface ItemProps {
  title: string;
}

const Item = (props: ItemProps) => (
  <View style={styles.item}>
    <Text>{props.title}</Text>
  </View>
);

export function ChooseCountryBottomSheetDialog(
  props: BottomSheetDialogProps,
): JSX.Element {
  const [visible, setVisible] = useState(false);

  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {title: 'List Item 3'},
    {title: 'List Item 4'},
    {title: 'List Item 5'},
    {title: 'List Item 6'},
    {title: 'List Item 7'},
    {title: 'List Item 8'},
    {title: 'List Item 9'},
    {title: 'List Item 10'},
    {title: 'List Item 11'},
    {title: 'List Item 12'},
    {title: 'List Item 13'},
    {title: 'List Item 14'},
    {title: 'List Item 15'},
    {title: 'List Item 16'},
    {title: 'List Item 17'},
    {title: 'List Item 18'},
    {title: 'List Item 19'},
    {title: 'List Item 20'},
  ];

  const onBackdropPress = () => {
    setVisible(false);
  };
  const openDialog = () => {
    setVisible(true);
  };
  return (
    <Icon
      name="earth"
      color={props.iconColor}
      size={props.iconSize}
      style={styles.container}
      onPress={openDialog}>
      <BottomSheet
        modalProps={{}}
        isVisible={visible}
        containerStyle={styles.bottomSheet}
        onBackdropPress={onBackdropPress}>
        <FlatList
          data={list}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.title}
          scrollEnabled={false}
          ListHeaderComponent={<Item title="header" />}
          ListFooterComponent={<Item title="footer" />}
        />
      </BottomSheet>
    </Icon>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheet: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  item: {
    flex: 1,
    backgroundColor: colors.white,
    height: 50,
  },
});
