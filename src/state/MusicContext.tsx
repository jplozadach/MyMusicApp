import {createContext} from 'react';

type Song = {
  id: number;
  title: String;
  favorite: Boolean;
};

export type MusicContextProps = {
  songsList: Song[];
  isAuthenticated?: undefined | Boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  setIsLoading: (loading: boolean) => void;
};

export const MusicContext = createContext<MusicContextProps>({
  songsList: [],
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
  setIsLoading: () => {},
});
