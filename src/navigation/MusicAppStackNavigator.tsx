import React, {Fragment, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoritesScreen from '~features/favorites/FavoritesScreen';
import HomeScreen from '~features/home/HomeScreen';
import LoginScreen from '~features/login/LoginScreen';
import SongScreen from '~features/song/SongScreen';
import {MusicContext} from '~state/MusicContext';
import LoadingScreen from './LoadingScreen';
import RootStackParamsList from './RootStackParamsList';
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function MusicAppStackNavigator() {
  const {isAuthenticated, isLoading} = useContext(MusicContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Fragment>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="favorites" component={FavoritesScreen} />
          <Stack.Screen name="song" component={SongScreen} />
        </Fragment>
      ) : (
        <Stack.Screen name="login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
