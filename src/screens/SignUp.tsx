import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';

import {TextLink} from '../components/Buttons/TextLink';
import {DatePickerDialog} from '../dialogs/DatePickerDialog';
import colors from '../styles/colors';
import {ChooseCountryBottomSheetDialog} from '../dialogs/ChooseCountryBottomSheetDialog';

export function SignUpScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');

  const navigateToLoginScreen = () => {
    console.log('navigate to Login Screen');
  };

  const buttonClicked = (email: string, password: string) => {
    console.log(email + ' ' + password);
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

    console.log('Date: ' + date);
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
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />

          <Input
            label="Favorite genres"
            value={favoriteGenre}
            onChangeText={setFavoriteGenre}
          />
          <Input label="User type" value={type} onChangeText={setType} />

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
