import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button, Text } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';

interface SearchBarProps {
    searchInput: string;
    setSearchInput: (searchInput: string) => void;
    clicked: boolean;
    setClicked: (clicked: boolean) => void;
}

const SearchBar = ({ searchInput, setSearchInput, clicked, setClicked }: SearchBarProps) => {
    // const [searchInput, setSearchInput] = useState<string>("");
    // const [accessToken, setAccessToken] = useState<string>("");
    // const [tracks, setTracks] = useState<Array<string>>([]);
    
    const handleChangeText = (text: any) => {
        setSearchInput(text);
        console.log(searchInput);
    }

    return (
        <View style={styles.container}>
            <View style={!clicked ? styles.searchBarUnclicked : styles.searchBarClicked}>
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={handleChangeText}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchInput("")
                    }}/>
                )}
            </View>
            {clicked && (
                <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                        Keyboard.dismiss();
                        setClicked(false);
                    }}
                ></Button>
                </View>
            )}
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBarUnclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: mainTheme.LIGHT_GREY_COLOR,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  }
})