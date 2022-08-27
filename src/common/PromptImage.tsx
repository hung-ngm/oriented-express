import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export type PromptImageProps = {
  imageUrl: string;
  extraProps?: object;
  width: number;
  height: number;
  onPress?: () => void;
}

const PromptImage = (props: PromptImageProps) => {
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

export default PromptImage;