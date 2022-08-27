import React, { useEffect, useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList,
  ActivityIndicator
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Header from '../../../common/Header';
import SongPreview from './components/SongPreview';
import PromptImage from '../../../common/PromptImage';
import { useStore } from '../../stores/store';
import { mainTheme } from '../../../themes/mainTheme';
import { Song } from '../../../types/song';
import { Audio } from 'expo-av';

export const SongList = () => {
//   const navigation = useAppNavigation();
    const [sound, setSound] = useState(null);
    const { songs } = useStore().songStore;
    console.log('songs', songs);

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
    }

    return (
    <View style={styles.container}>
        <View style={styles.promptContainer}>
            <PromptImage
                imageUrl="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                width={200}
                height={200}
            />
        </View>
        <View style={styles.headerContainer}>
            <Header text="Friends" fontSize={25} />
        </View>
        {songs.length > 0 ? (
        <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <SongPreview
                song={item}
                onPress={() => {
                    handleSongPressed(item);
                }} 
            />
            )}
            initialNumToRender={10}
            onEndReachedThreshold={0.5}
            // onEndReached={loadMore}
            // ListFooterComponent={hasMore ? 
            // <ActivityIndicator size="large" color={mainTheme.PRIMARY_COLOR} /> : null
            // }
        />
        ) : (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>There is no song</Text>
        </View>
        )}
    </View>
    ) 
}

export default observer(SongList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  promptContainer: {
    paddingTop: 0,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    paddingLeft: 15,
    paddingTop: 0,
  },
  emptyContainer: {

  },
  emptyText: {

  }
})