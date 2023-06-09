import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';
import {TextLink} from '../components/Buttons/TextLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

export function LoginScreen({navigation}: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const login = (emailText: string, passwordText: string) => {
    console.log(emailText + ' ' + passwordText);
    console.log('Call API');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBlock>LOGIN</TitleBlock>

      <View>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email..."
        />
        <Input
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password..."
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
