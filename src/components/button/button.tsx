import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { GetPaletteHook } from 'theme'
import { Poppins } from 'theme/fonts';
import { moderateScale, verticalScale } from '@utils/responsive';

const Button = ({ text, onPress }: { text: string, onPress: () => void }) => {
    const styles = getStyles();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const getStyles = () => {
    const palette = GetPaletteHook();
    return (StyleSheet.create({
        container: {
            backgroundColor: palette.primary,
            width: '100%',
            alignItems: 'center',
            paddingVertical: verticalScale(16),
            borderRadius: 16,
        },
        text: {
            fontFamily: Poppins.SemiBold,
            fontSize: moderateScale(18),
            color: palette.textPrimary,
        }
    }))
}

export { Button }