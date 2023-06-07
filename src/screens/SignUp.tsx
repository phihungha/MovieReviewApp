import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';

import {TextLink} from '../components/Buttons/TextLink';

export function SignUpScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');

  const textClicked = () => {
    console.log('navigate to Login Screen');
  };

  const buttonClicked = (_email: string, _password: string) => {
    console.log(_email + ' ' + _password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.space} />
        <TitleBlock>SIGN UP</TitleBlock>

        <View>
          <Input label="Email" value={email} onChangeText={setEmail} />
          <Input label="Name" value={name} onChangeText={setName} />
          {/* <Input
            label="Birthday"
            rightIcon={<Icon name="google-home" size={24}></Icon>}
          /> */}

          <Input label="Birthday" value={birthday} onChangeText={setBirthday} />
          <Input label="Country" value={country} onChangeText={setCountry} />
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
          <Button onPress={() => buttonClicked(email, password)}>LOGIN</Button>
          <TextLink
            text="Already have an account, "
            textLink="sign in"
            onClicked={textClicked}
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
});
