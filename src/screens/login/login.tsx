
import { Text, ImageBackground, SafeAreaView, View } from 'react-native';
import { ImgAssets } from '@assets/index';
import { Button, Divider, SvgIcon, TextInput } from 'components';
import { getStyles } from './login.styles';

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

export { LoginScreen }