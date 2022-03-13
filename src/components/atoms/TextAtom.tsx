import {View, Text} from 'react-native';
import React from 'react';

type textProps = {
  title: String;
};

export default function TextAtom(props: textProps) {
  console.log(props);
  return (
    <View>
      <Text>TextAtom</Text>
    </View>
  );
}
