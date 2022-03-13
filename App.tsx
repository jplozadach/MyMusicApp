import React, {useState} from 'react';
import RootNavigator from '~navigation/RootNavigator';
import {MusicContext} from '~state/MusicContext';

type Song = {
  title: String;
  favorite: Boolean;
};

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  var songsList: Song[] = [
    {title: 'Song A', favorite: true},
    {title: 'Song B', favorite: false},
    {title: 'Song C', favorite: true},
  ];

  return (
    <MusicContext.Provider
      value={{
        songsList,
        isAuthenticated,
        login: () => {
          setisAuthenticated(true);
        },
        logout: () => {
          setisAuthenticated(false);
        },
      }}>
      <RootNavigator />
    </MusicContext.Provider>
  );
};

export default App;
