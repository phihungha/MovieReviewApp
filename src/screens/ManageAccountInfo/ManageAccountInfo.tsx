import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';
import {ManageAccountProfilePictureDisplay} from './components/ManageAccountProfilePictureDisplay';
import {ManageAccountInformationDisplay} from './components/ManageAccountInformationDisplay';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export function ManageAccountInfo(): JSX.Element {
  const [birthdayText, setBirthdayText] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rePasswordValue, setRePasswordValue] = useState('');

  const [name, setName] = useState('Name');
  const [uri, setUri] = useState('');

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };
  const onPressImage = async () => {
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response?.assets) {
        const uriResult = response.assets?.at(0)?.uri;
        setUri(uriResult ? uriResult : '');
      }
    });
  };

  const onSelectedBirthday = (date: any) => {
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

  const onSaveInfo = () => {
    console.log('Call API');
    console.log(uri);
    console.log(name);
    console.log(genderValue);
    console.log(birthdayText);
    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(rePasswordValue);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ManageAccountProfilePictureDisplay
          nameValue={name}
          onSelectedName={(item: string) => setName(item)}
          imageUri={uri}
          onSelectedImage={onPressImage}
        />
        <ManageAccountInformationDisplay
          birthdayValue={birthdayText}
          onSelectedDate={onSelectedBirthday}
          onSelectedGender={(item: any) => setGenderValue(item)}
          usernameValue={usernameValue}
          onSelectedUsername={(item: string) => setUsernameValue(item)}
          emailValue={emailValue}
          onSelectedEmail={(item: string) => setEmailValue(item)}
          passwordValue={passwordValue}
          onSelectedPassword={(item: string) => setPasswordValue(item)}
          rePasswordValue={rePasswordValue}
          onSelectedRePassword={(item: string) => setRePasswordValue(item)}
        />
        <Button onPress={onSaveInfo}>Save</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    gap: 16,
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
});
