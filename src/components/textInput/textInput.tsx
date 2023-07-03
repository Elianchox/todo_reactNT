import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput as TextInputRN } from 'react-native-gesture-handler';
import { GetPaletteHook } from 'theme';
import { horizontalScale, moderateScale, verticalScale } from 'utils/responsive';
import { Poppins } from 'theme/fonts';
import { Divider } from 'components/divider/dividerComponent';

interface TextInputProps {
    value: string,
    onChange: (s: string) => void;
    placeHolder?: string,
    type?: 'text' | 'password',
    error?: string,
}

const TextInput = ({
    value,
    onChange,
    placeHolder,
    type = 'text',
    error,
}: TextInputProps) => {
    const styles = getStyles();
    return (
        <View style={styles.container}>
            <TextInputRN
                value={value}
                onChangeText={(e) => onChange(e)}
                secureTextEntry={type === 'password'}
                placeholder={placeHolder}

                style={styles.input}
            />
            <Divider y={6} />
            {error && <Text style={styles.error}>Essto es un error</Text>}
        </View>
    )
}

const getStyles = () => {
    const palette = GetPaletteHook();
    return (
        StyleSheet.create({
            container: {
                width: '100%',
            },
            input: {
                //input
                width: '100%',
                backgroundColor: palette.backgroundInput,
                paddingVertical: verticalScale(14),
                paddingHorizontal: horizontalScale(16),
                borderRadius: 20,


                //Font
                fontSize: moderateScale(16),
                fontFamily: Poppins.Regular,
                color: palette.textColorInput,
            },
            error: {
                color: palette.error,
                fontFamily: Poppins.Regular,
                fontSize: moderateScale(16),
                paddingHorizontal: horizontalScale(4)
            }
        })
    )
}

export { TextInput }