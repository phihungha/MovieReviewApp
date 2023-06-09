import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';

import {TextLink} from '../components/Buttons/TextLink';
import {DatePickerDialog} from '../dialogs/DatePickerDialog';
import colors from '../styles/colors';
import {ChooseCountryBottomSheetDialog} from '../dialogs/ChooseCountryBottomSheet';
import {ItemData} from '../components/Items/BottomSheetListItem';
import {ChooseFavoriteGenresBottomSheetDialog} from '../dialogs/ChooseFavoriteGenresBottomSheet';
import {ChooseTypeBottomSheet} from '../dialogs/ChooseTypeBottomSheet';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParams, 'SignUp'>;

export function SignUpScreen({navigation}: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const buttonClicked = (emailText: string, passwordText: string) => {
    console.log(emailText + ' ' + passwordText);
  };

  const onSelectedDate = (date: Date) => {
    let tempDate = new Date(date);
    let dateToText =
      tempDate.getMonth() +
      1 +
      '/' +
      tempDate.getDate() +
      '/' +
      tempDate.getFullYear();
    setBirthdayText(dateToText);
  };

  const onSelectedCountry = (countryItem: ItemData) => {
    setCountry(countryItem.title);
  };
  const onSelectedGenre = (genreItem: ItemData) => {
    setFavoriteGenre(genreItem.title);
  };
  const onSelectedType = (typeItem: ItemData) => {
    setType(typeItem.title);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.space} />
        <TitleBlock>SIGN UP</TitleBlock>

        <View>
          <Input label="Email" value={email} onChangeText={setEmail} />
          <Input label="Name" value={name} onChangeText={setName} />

          <Input
            label="Birthday"
            value={birthdayText}
            disabled
            onChangeText={setBirthdayText}
            rightIcon={
              <DatePickerDialog
                onSelectedDate={onSelectedDate}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="Country"
            value={country}
            disabled
            onChangeText={setCountry}
            rightIcon={
              <ChooseCountryBottomSheetDialog
                onSelectedCountry={onSelectedCountry}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="Favorite genres"
            value={favoriteGenre}
            disabled
            onChangeText={setFavoriteGenre}
            rightIcon={
              <ChooseFavoriteGenresBottomSheetDialog
                onSelectedGenre={onSelectedGenre}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />
          <Input
            label="User type"
            value={type}
            onChangeText={setType}
            disabled
            rightIcon={
              <ChooseTypeBottomSheet
                onSelectedType={onSelectedType}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            label="Re-enter password"
            secureTextEntry={true}
            value={rePassword}
            onChangeText={setRePassword}
          />
        </View>

        <View style={styles.viewContainer}>
          <Button
            onPress={() => buttonClicked(email, password)}
            title="SIGN UP"
          />
          <TextLink
            text="Already have an account, "
            textLink="login"
            onClicked={navigateToLoginScreen}
          />
        </View>
        <View style={styles.space} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
  },
  viewContainer: {
    paddingHorizontal: 10,
  },
  space: {
    height: 100,
  },
  iconStyle: {
    color: colors.white,
    fontSize: 25,
  },
});
