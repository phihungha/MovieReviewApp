import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../components/Display/TitleBlock';
import {TextLink} from '../components/Buttons/TextLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigators/RootStackNavigator';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {StandardLoadingIcon} from '../components/Display/StandardLoadingIcon';
import {ButtonLoadingIcon} from '../components/Display/ButtonLoadingIcon';

type LoginScreenProps = NativeStackScreenProps<RootStackParams, 'Login'>;

export function LoginScreen(props: LoginScreenProps): React.JSX.Element {
  const [authServiceInitialized, setAuthServiceInitialized] = useState(false);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setAuthServiceInitialized(true);
    if (user) {
      props.navigation.navigate('Main');
    }
  }

  useEffect(() => auth().onAuthStateChanged(onAuthStateChanged));

  if (!authServiceInitialized) {
    return (
      <SafeAreaView style={styles.container}>
        <StandardLoadingIcon />
      </SafeAreaView>
    );
  }

  return <LoginForm {...props} />;
}

function LoginForm({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    setIsLoading(true);
    await auth().signInWithEmailAndPassword(email, password);
    navigation.navigate('Main');
    setIsLoading(false);
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
