import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {MusicContext} from '~state/MusicContext';

const FavoritesScreen = () => {
  const {songsList} = useContext(MusicContext);

  return (
    <View>
      <Text>Favorites</Text>
      {songsList
        .filter(item => item.favorite === true)
        .map(item => {
          return <Text key={item.id}>{item.title}</Text>;
        })}
    </View>
  );
};

export default FavoritesScreen;
