import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Header from '../../common/Header';
import PromptImage from '../../common/PromptImage';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import { observer } from 'mobx-react-lite';

import {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET
} from '@env';

const HomeScreen = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [accessToken, setAccessToken] = useState<string>("");
    const [tracks, setTracks] = useState<Array<string>>([]);
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        var authParameters = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body:
            "grant_type=client_credentials&client_id=" +
            SPOTIFY_CLIENT_ID +
            "&client_secret=" +
            SPOTIFY_CLIENT_SECRET,
        };
        fetch("https://accounts.spotify.com/api/token", authParameters)
          .then((result) => result.json())
          .then((data) => { 
            console.log('data', data);
            setAccessToken(data.access_token)
        });
        if (searchInput != "") {
          search();
        }
      }, [searchInput]);

    
    
    const search = async () => {
        console.log("search for " + searchInput);
        var artistParameters = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
            },
        };
        var returnedTracks = await fetch(
            "https://api.spotify.com/v1/search?q=" +
            searchInput +
            "&type=track&limit=50&market=AU",
            artistParameters
        )
            .then((response) => response.json())
            .then((data) => {
                const tracks = data.tracks.items.map((item: any) => {
                    return {
                        name: item.name,
                        id: item.id,
                        uri: item.uri,
                        external_urls: item.external_urls,
                        href: item.href,
                        artists: item.artists,
                        imageUrl: item.album.images[0].url,
                        previewUrl: item.preview_url,
                        
                    }
                })
                setTracks(tracks);
                return data;
            });

        console.log('tracks', tracks);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Header 
                        text="Today's Prompt" 
                        fontSize={24} 
                    />
                </View>
                <View style={styles.promptContainer}>
                    <PromptImage
                        imageUrl="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                        width={360}
                        height={360}
                    />
                </View>
                <View style={styles.chatContainer}>
                    <Header 
                        text="Select a song that matches with the prompt" 
                        fontSize={18} 
                        extraProps={{
                            paddingTop: 15,
                        }}
                    />
                    <SearchBar
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                    {!tracks ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            <SongList
                                searchInput={searchInput}
                                data={tracks}
                                setClicked={setClicked}
                            />
                            
                        )}
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default observer(HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      paddingTop: 25,
      alignItems: "center",
    },
    promptContainer: {
        paddingTop: 20,
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    chatContainer: {
        alignItems: "center",
        margin: 5,
    }
  })