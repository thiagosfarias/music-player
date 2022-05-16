import {View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window')

const MusicPlayer = () => {
  

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.mainContainer}></View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomIconWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart-outline" size={30} color="#888888" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="repeat" size={30} color="#888888" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="share-outline" size={30} color="#888888" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
        </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18124E',
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46'
  },
  bottomIconWrapper: {
    flexDirection:  'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});

export default MusicPlayer;
