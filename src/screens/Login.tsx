import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';
import {TextLink} from '../components/Buttons/TextLink';

export function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignUpScreen = () => {
    console.log('navigate to Sign up Screen');
  };

  const login = (emailText: string, passwordText: string) => {
    console.log(emailText + ' ' + passwordText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBlock>LOGIN</TitleBlock>

      <View>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.viewContainer}>
        <Button onPress={() => login(email, password)}>LOGIN</Button>
        <TextLink
          text="Didn't have an account, "
          textLink="sign up"
          onClicked={navigateToSignUpScreen}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
  },
  viewContainer: {
    paddingHorizontal: 10,
  },
});
