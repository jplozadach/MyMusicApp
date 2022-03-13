import {View, Text, Button} from 'react-native';
import React from 'react';
import RootStackParamsList from '~navigation/RootStackParamsList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamsList, 'home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('favorites');
  };

  return (
    <View>
      <Text>HOME</Text>
      <Button title="Go Home" onPress={goToHome} />
    </View>
  );
};

export default HomeScreen;
