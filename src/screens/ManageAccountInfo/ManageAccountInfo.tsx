import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';
import {ManageAccountProfilePictureDisplay} from './components/ManageAccountProfilePictureDisplay';
import {ManageAccountInformationDisplay} from './components/ManageAccountInformationDisplay';

export function ManageAccountInfo(): JSX.Element {
  const [birthdayText, setBirthdayText] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');
  const [name, setName] = useState('Name');

  const onSelectedImage = () => {
    console.log('Choose image');
  };
  const onSelectedName = (name: string) => {
    setName(name);
  };
  const onSelectedCountry = (item: any) => {
    setCountry(item.title);
  };
  const onSelectedType = (item: any) => {
    setType(item.title);
  };
  const onSelectedFavoriteGenre = (item: any) => {
    setFavoriteGenre(item.title);
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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ManageAccountProfilePictureDisplay
          nameValue={name}
          onSelectedName={onSelectedName}
          onSelectedImage={onSelectedImage}
        />
        <ManageAccountInformationDisplay
          countryValue={country}
          typeValue={type}
          favoriteGenreValue={favoriteGenre}
          birthdayValue={birthdayText}
          onSelectedCountry={onSelectedCountry}
          onSelectedType={onSelectedType}
          onSelectedFavoriteGenre={onSelectedFavoriteGenre}
          onSelectedDate={onSelectedBirthday}
        />
        <Button>Save</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  scrollView: {
    gap: 12,
  },
});
