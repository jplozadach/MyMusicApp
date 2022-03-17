/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {getObject} from '~store/secure-store';
import Credentials from '~models/credentials';
import * as constants from '~constants/system';
import {MusicContext} from '~state/MusicContext';

const LoadingScreen = () => {
  const {login, setIsLoading} = useContext(MusicContext);

  const loadComponent = async () => {
    const credentials = await getObject<Credentials>(constants.credentials);

    if (credentials) {
      login();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadComponent();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
