
import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react';
import { ImgAssets } from '@assets/index';
import { Button, Divider, SvgIcon } from 'components/index';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from './welcome.styles';


const WelcomeScreen = () => {

    const { navigate } = useNavigation();
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
                    <SvgIcon icon='ICON1' width={180} height={168} />
                    <Divider y={124} />
                    <Text style={styles.title}>Things To Do With TODO</Text>
                    <Divider y={32} />
                    <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper leo in eros parturient arcu odio diam. Gravida faucibus ac mauris et risus.</Text>
                </View>
                <Button text='Get Started' onPress={() => navigate('login' as never)} />
                <Divider y={64} />
            </SafeAreaView>
        </ImageBackground>
    )
}

export { WelcomeScreen }