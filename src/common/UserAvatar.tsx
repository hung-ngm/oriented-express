import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

export type UserAvatarProps = {
  imageUrl: string;
  extraProps?: object;
  width: number;
  height: number;
  borderRadius: number;
  onPress?: () => void;
}

const UserAvatar = (props: UserAvatarProps) => {
  const { extraProps, width, height, borderRadius, imageUrl, onPress } = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...extraProps,
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    >
      <Image 
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,

        }}
        source={{ uri: imageUrl }} 
        
      />
    </TouchableHighlight>
  )
}

export default UserAvatar;