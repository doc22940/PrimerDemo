import * as React from "react";
import {StyleSheet} from "react-native";
import { SvgXml } from 'react-native-svg';

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16
    }
});

export const Icon = (props) => {
    const {src: source, style, ...otherProps} = props;

    return <SvgXml xml={source} style={[styles.icon, StyleSheet.flatten(style)]} {...otherProps} />;
};
