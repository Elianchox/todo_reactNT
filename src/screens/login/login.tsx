import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

import { StyleSheet } from 'react-native/';
import { horizontalScale } from 'utils/responsive';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(32),
    },
});

export { LoginScreen }