import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export type HeaderProps = {
    text: string;
    fontSize: number;
    extraProps?: object;
}

const Header = (props: HeaderProps) => {
    return (
        <View 
          style={{
            ...props.extraProps,
          }}
        >
          <Text style={{ fontSize: props.fontSize }}>{props.text}</Text>
        </View>
      )
}

export default Header;