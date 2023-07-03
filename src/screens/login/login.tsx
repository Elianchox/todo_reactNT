
import { Text, ImageBackground, StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale } from 'utils/responsive';
import { ImgAssets } from '@assets/index';
import { Button, Divider, SvgIcon, TextInput } from 'components';
import { GetPaletteHook } from 'theme';
import { Poppins } from 'theme/fonts';

const LoginScreen = () => {
    const styles = getStyles();
    return (
        <ImageBackground source={ImgAssets.bg}
            resizeMode="cover"
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safeArea}
            >
                <View style={styles.container2}>
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Divider y={48} />
                    <SvgIcon icon='ICON2' width={180} height={168} />
                    <Divider y={117} />
                    <View style={styles.containerInputs}>
                        <TextInput
                            value={''}
                            onChange={function (s: string): void { throw new Error('Function not implemented.'); }}
                            placeHolder='Username'
                        />
                        <Divider y={16} />
                        <TextInput
                            value={''}
                            onChange={function (s: string): void { throw new Error('Function not implemented.'); }}
                            placeHolder='Password'
                            type='password'
                        />
                    </View>
                </View>
                <View style={{ width: '86%' }}>
                    <Button text='Login' onPress={() => { }} />
                </View>
                <Divider y={64} />
            </SafeAreaView>
        </ImageBackground>
    )
}


const getStyles = () => {
    const palette = GetPaletteHook();
    return (
        StyleSheet.create({
            container: {
                flex: 1,
                paddingHorizontal: horizontalScale(40),
            },
            safeArea: {
                flex: 1,
                paddingHorizontal: horizontalScale(24),
                alignItems: 'center',
            },
            container2: {
                width: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            containerInputs: {
                width: '100%',
            },
            title: {
                color: palette.textPrimary,
                fontFamily: Poppins.SemiBold,
                fontSize: moderateScale(24),
            },
            subTitle: {
                color: palette.textSecondary,
                fontFamily: Poppins.SemiBold,
                textAlign: 'center'
            }
        })
    )
}

export { LoginScreen }