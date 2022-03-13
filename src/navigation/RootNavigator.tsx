import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MusicAppStackNavigator from './MusicAppStackNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MusicAppStackNavigator />
    </NavigationContainer>
  );
}
