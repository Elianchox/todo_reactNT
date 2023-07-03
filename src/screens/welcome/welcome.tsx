import { View, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react';
import { ImgAssets } from '@assets/index';
import { Poppins } from 'theme/fonts';
import { horizontalScale, moderateScale } from 'utils/responsive';
import { Button, Divider, SvgIcon } from 'components/index';
import { GetPaletteHook } from 'theme/index';


const Welcome = () => {

    const styles = getStyles()

    return (
        <ImageBackground source={ImgAssets.bg}
            resizeMode="cover"
            style={styles.container}>
            <SafeAreaView
                style={styles.safeArea}
            >
                <View style={styles.container2}>
                    <SvgIcon icon='ICON1' width={180} height={168} />
                    <Divider y={124} />
                    <Text style={styles.tittle}>Things To Do With TODO</Text>
                    <Divider y={32} />
                    <Text style={styles.subTittle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper leo in eros parturient arcu odio diam. Gravida faucibus ac mauris et risus.</Text>
                </View>
                <Button text='Get Started' />
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
                paddingHorizontal: horizontalScale(32),
            },
            safeArea: {
                flex: 1,
                paddingHorizontal: horizontalScale(24),
            },
            container2: {
                width: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            tittle: {
                color: palette.textPrimary,
                fontFamily: Poppins.SemiBold,
                fontSize: moderateScale(24),
            },
            subTittle: {
                color: palette.textSecondary,
                fontFamily: Poppins.SemiBold,
                textAlign: 'center'
            }
        })
    )
}

export { Welcome }