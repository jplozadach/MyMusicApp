import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import RootStackParamsList from '~navigation/RootStackParamsList';
import {MusicContext} from '~state/MusicContext';

type Props = NativeStackScreenProps<RootStackParamsList, 'login'>;

const LoginScreen: React.FC<Props> = ({}) => {
  const {login} = useContext(MusicContext);

  return (
    <View>
      <Text>LOGIN</Text>
      <Button title="Go Home" onPress={login} />
    </View>
  );
};

export default LoginScreen;
