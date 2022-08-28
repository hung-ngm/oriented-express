import React from 'react'
import { Text, TouchableHighlight } from 'react-native';
import { mainTheme } from '../themes/mainTheme';

interface onPressFunc {
    (): void;
}
export type PrimaryButtonProps = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    onPress: onPressFunc;
    extraStyles?: object;
    disabled? : boolean;
    extraTouchableHighlightProps?: object;
    extraTextProps?: object;
};
const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <TouchableHighlight
            style={{
                width: 300,
                height: 50,
                backgroundColor: props.backgroundColor || mainTheme.PRIMARY_COLOR,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...props.extraStyles,
            }}
            onPress={props.onPress}
            underlayColor="orange"
            {...props.extraTouchableHighlightProps}
        >
            <Text style={{
                color: props.textColor,
                ...props.extraTextProps
            }}>
                {props.text}
            </Text>
        </TouchableHighlight>
    )
}

export default PrimaryButton;
