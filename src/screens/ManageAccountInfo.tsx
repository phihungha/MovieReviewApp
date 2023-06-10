import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TextLink} from '../components/Buttons/TextLink';
import {Avatar, Button} from '@rneui/themed';
import {RegularText} from '../components/Text/RegularText';
import {BigTitleText} from '../components/Text/BigTitleText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

export function ManageAccountInfo(): JSX.Element {
  const onClicked = () => {};
  const uri = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg';
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={{gap: 12}}>
            <View style={styles.titleLine}>
              <BigTitleText>Profile Picture</BigTitleText>
              <TextLink text="" textLink="edit" onClicked={onClicked} />
            </View>

            <View style={styles.avatarContainer}>
              <Avatar size={128} rounded source={{uri: uri}} />
            </View>
          </View>

          <View style={{gap: 12}}>
            <View style={styles.titleLine}>
              <BigTitleText>Detail</BigTitleText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.mediumBlack,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 12,
              }}>
              <RegularText>Birthday: 11/2/2023</RegularText>
              <Icon name="earth" size={24} color={colors.white} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.mediumBlack,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 12,
              }}>
              <RegularText>Birthday: 11/2/2023</RegularText>
              <Icon name="earth" size={24} color={colors.white} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.mediumBlack,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 12,
              }}>
              <RegularText>Birthday: 11/2/2023</RegularText>
              <Icon name="earth" size={24} color={colors.white} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.mediumBlack,
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 12,
              }}>
              <RegularText>Birthday: 11/2/2023</RegularText>
              <Icon name="earth" size={24} color={colors.white} />
            </View>

            <Button>Save</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  titleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {},
});
