import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
} from 'react-native';
import { observer } from 'mobx-react-lite';
import UserAvatar from '../../../common/UserAvatar';
import AlbumCover from '../../../common/AlbumCover';
import { Song } from '../../../types/song';

interface SongItemProps {
    song: Song;
    onPress: () => void;
}

const SongItem = ({ song, onPress }: SongItemProps) => {
    const { name, imageUrl, artists } = song;
    console.log('song', song);

    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.songPreviewTextContainer}>
            <View style={styles.firstRow}>
                <Text style={styles.songTitle}>{name}</Text>
            </View>
            <View style={styles.secondRow}>
                <Text style={styles.songArtists}>{artists}</Text>
            </View> 
        </View>
        <AlbumCover
            imageUrl={imageUrl} 
            width={60}
            height={60}
            extraProps={{ marginRight: 0}}
        />
    </TouchableOpacity>
    )
}

export default SongItem;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 12,
    },
    profileAvatarContainer: {
      flex: 1.5,
    },
    songPreviewTextContainer: {
      flex: 4.5,
      marginTop: 0,
      paddingTop: 0,
      paddingLeft: 20,
    },
    firstRow: {
      flexDirection: "row",
    },
    songTitle: {
      paddingLeft: 0,
      marginLeft: 0,
    },
    secondRow: {
      flexDirection: "row",
    },
    songArtists: {
      fontWeight: 'bold',
      flex: 4
    },
    albumCoverContainer: {

    }
  
})