import React from 'react';
import {FlatList, ListRenderItem, SafeAreaView} from 'react-native';
import {BottomSheet} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

type RenderItem = ListRenderItem<any> | null | undefined;
type KeyExtractor = ((item: any, index: number) => string) | undefined;
type Component =
  | React.ComponentType<any>
  | React.ReactElement
  | null
  | undefined;
type OnPress = () => void;

interface BottomSheetDialogProps {
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  listItem: {}[];
  renderItem: RenderItem;
  keyExtractor: KeyExtractor;
  listHeaderComponent?: Component;
  listFooterComponent?: Component;
  onPressIcon: OnPress;
  onBackdropPress: OnPress;
  isVisible: boolean;
}

/**
 * @using generic component for bottom sheet
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 * @param {string} iconName icon's name
 * @param {{}[]} listItem list item want to display on BottomSheet
 * @param {RenderItem} renderItem renderItem of flatList
 * @param {KeyExtractor} keyExtractor keyExtractor of flatList
 * @param {Component} listHeaderComponent first item component of bottomSheet
 * @param {Component} listFooterComponent last item component of bottomSheet
 * @param {OnPress} onPressIcon eventHandle when click on Icon (open bottomSheet)
 * @param {OnPress} onBackdropPress eventHandle when click out side the bottomSheet
 * @param {boolean} isVisible true => display bottomSheet
 */
export function GenericBottomSheetDialog(
  props: BottomSheetDialogProps,
): JSX.Element {
  return (
    <Icon
      name={props.iconName}
      color={props.iconColor}
      size={props.iconSize}
      style={styles.container}
      onPress={props.onPressIcon}>
      <SafeAreaView>
        <BottomSheet
          modalProps={{}}
          isVisible={props.isVisible}
          containerStyle={styles.bottomSheet}
          backdropStyle={styles.backdrop}
          scrollViewProps={{endFillColor: '#fff'}}
          onBackdropPress={props.onBackdropPress}>
          <FlatList
            contentContainerStyle={{backgroundColor: colors.mediumBlack}}
            data={props.listItem}
            renderItem={props.renderItem}
            keyExtractor={props.keyExtractor}
            scrollEnabled={false}
            ListHeaderComponent={props.listHeaderComponent}
            ListFooterComponent={props.listFooterComponent}
          />
        </BottomSheet>
      </SafeAreaView>
    </Icon>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
  bottomSheet: {
    maxHeight: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
