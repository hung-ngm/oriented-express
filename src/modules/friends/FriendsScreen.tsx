import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../common/Header';
import SongList from './song-list/SongList';

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text="Today's Prompt" fontSize={25} />
      </View>
      <View style={styles.songsContainer}>
        <SongList />
      </View>
    </View>
  )
}

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 15,
  },
  songsContainer: {
    flex: 8,
  }
})