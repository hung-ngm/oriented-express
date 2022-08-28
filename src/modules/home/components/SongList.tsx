import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import SongItem from './SongItem';
import { Song } from '../../../types/song';
import { Audio } from 'expo-av';
import { useStore } from '../../stores/store';

interface SongListProps {
    searchInput: string;
    data: any;
    setClicked: (clicked: boolean) => void;
}

const SongList = ({ searchInput, data, setClicked }: SongListProps) => {
    const [sound, setSound] = useState(null);
    const { songs, createSong } = useStore().songStore;

    useEffect(() => {
        return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
    }, [sound]);

    const handleSongPressed = async (song: Song) => {
        console.log('uri', song.previewUrl);
        const { sound } = await Audio.Sound.createAsync(
            { uri: song.previewUrl },
         );
        setSound(sound);
        console.log("Song is playing");
        await sound.playAsync();
        createSong(song);
    }

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchInput === "") {
          return <SongItem song={item} onPress={() => {
            handleSongPressed(item);
          }} />;
        }
        // filter of the name
        if (item.name.toUpperCase().includes(searchInput.toUpperCase().trim().replace(/\s/g, ""))) {
          return <SongItem song={item} onPress={() => {
            handleSongPressed(item);
          }} />;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View
                onStartShouldSetResponder={(_event) => {
                    setClicked(false);
                    return false;
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={10}
                />
            </View>
        </SafeAreaView>
    )
}

export default SongList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
})