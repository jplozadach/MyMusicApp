import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import RootStackParamsList from '~navigation/RootStackParamsList';
import {MusicContext} from '~state/MusicContext';
import {save} from '~store/secure-store';

GoogleSignin.configure();

type Props = NativeStackScreenProps<RootStackParamsList, 'login'>;

const LoginScreen: React.FC<Props> = ({}) => {
  const {login} = useContext(MusicContext);

  const onLoginHandler = async () => {
    try {
      //await save('credentials', {name: 'Pablo'});
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      await save('credentials', userInfo);
      login();
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('canceled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('inprogress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('notavailable');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <View>
      <Text>LOGIN</Text>
      {/* <Button title="Go Home" onPress={onLoginHandler} /> */}
      <GoogleSigninButton onPress={onLoginHandler} />
    </View>
  );
};

export default LoginScreen;
