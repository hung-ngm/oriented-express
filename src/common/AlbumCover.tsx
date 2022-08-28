import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export type AlbumCoverProps = {
  imageUrl: string;
  extraProps?: object;
  width: number;
  height: number;
  onPress?: () => void;
}

const AlbumCover = (props: AlbumCoverProps) => {
  const { extraProps, width, height, imageUrl, onPress } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...extraProps,
        width: width,
        height: height,
      }}
    >
      <Image 
        style={{
          height: height,
          width: width,
        }}
        source={{ uri: imageUrl }} 
        
      />
    </TouchableHighlight>
  )
}

export default AlbumCover;