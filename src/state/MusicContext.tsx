import {createContext} from 'react';

type Song = {
  title: String;
  favorite: Boolean;
};

export type MusicContextProps = {
  songsList: Song[];
  isAuthenticated?: undefined | Boolean;
  login: () => void;
  logout: () => void;
};

export const MusicContext = createContext<MusicContextProps>({
  songsList: [],
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
