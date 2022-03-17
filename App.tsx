import React from 'react';
import RootNavigator from '~navigation/RootNavigator';
import {MusicContext} from '~state/MusicContext';
import {AppState} from './App.state';

const App = () => {
  const state = AppState().value;
  return (
    <MusicContext.Provider value={state}>
      <RootNavigator />
    </MusicContext.Provider>
  );
};

export default App;
