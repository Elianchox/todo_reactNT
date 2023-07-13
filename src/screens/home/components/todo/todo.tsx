import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'components'
import { GetPaletteHook } from 'theme';
import { Poppins } from 'theme/fonts';
import { moderateScale } from 'utils/responsive';
import { CheckBox } from 'components/checkBox/checkBox';

const Todo = () => {

    const styles = getStyles();

    return (
        <View
            style={styles.container}
        >
            <CheckBox />
            <Divider x={20} />
            <View
                style={styles.container2}
            >
                <Text style={styles.todoText}>Deserunt proident consequat nulla tempor minim nisi tempor deserunt adipisicing exercitation.</Text>
                <Divider y={8} />
                <Text style={styles.hourText}>12:42 PM</Text>
            </View>
        </View>
    )
}


const getStyles = () => {
    const palette = GetPaletteHook();
    return (
        StyleSheet.create({
            container: {
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center'
            },
            container2: {
                height: '100%',
                flex: 1,
            },
            todoText: {
                fontFamily: Poppins.Regular,
                fontSize: moderateScale(15),
                color: palette.textPrimary,
            },
            hourText: {
                fontFamily: Poppins.Regular,
                fontSize: moderateScale(13),
                color: palette.textSecondary,
            }
        })
    )
}

export { Todo }