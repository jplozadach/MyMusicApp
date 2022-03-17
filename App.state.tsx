import {useState, ProviderProps} from 'react';
import {MusicContextProps} from '~state/MusicContext';
import {cleanAll} from '~store/secure-store';

type Song = {
  id: number;
  title: String;
  favorite: Boolean;
};

export const AppState = (): ProviderProps<MusicContextProps> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  var songsList: Song[] = [
    {id: 1, title: 'Song A', favorite: true},
    {id: 2, title: 'Song B', favorite: false},
    {id: 3, title: 'Song C', favorite: true},
  ];

  const value = {
    songsList,
    isAuthenticated,
    isLoading,
    setIsLoading,
    login: () => {
      setisAuthenticated(true);
    },
    logout: () => {
      setisAuthenticated(false);
      cleanAll();
    },
  };

  return {value};
};
