import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MusicPlayer from './screens/MusicPlayer';

const App = () => {
  return (
    <View style={style.container}>
      <MusicPlayer />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
      flex: 1,
  }
})

export default App;


