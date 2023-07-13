import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';
import {TextLink} from '../components/Text/TextLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';
import auth from '@react-native-firebase/auth';
import {ButtonLoadingIcon} from '../components/Display/ButtonLoadingIcon';
import Snackbar from 'react-native-snackbar';

type LoginScreenProps = NativeStackScreenProps<RootStackParams, 'Login'>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    if (email === '' || password === '') {
      return Snackbar.show({text: 'Empty email or password'});
    }
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Main', {screen: 'HomeStack'});
    } catch (err) {
      Snackbar.show({text: 'Incorrect email or password'});
    } finally {
      setIsLoading(false);
    }
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

      <View style={styles.buttonContainer}>
        <Button onPress={login}>
          {isLoading ? <ButtonLoadingIcon /> : 'LOGIN'}
        </Button>
        <TextLink
          text="Don't have an account? "
          textLink="Sign up now"
          onClicked={() => navigation.navigate('SignUp')}
          isUnderline={false}
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
  buttonContainer: {
    paddingHorizontal: 10,
    gap: 20,
  },
});
