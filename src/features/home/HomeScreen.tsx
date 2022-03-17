import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import RootStackParamsList from '~navigation/RootStackParamsList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MusicContext} from '~state/MusicContext';

type Props = NativeStackScreenProps<RootStackParamsList, 'home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('favorites');
  };

  const {logout} = useContext(MusicContext);

  return (
    <View>
      <Text>HOME</Text>
      <Button title="Go favorites" onPress={goToHome} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
