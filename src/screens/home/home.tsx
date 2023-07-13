import { Text, ImageBackground, SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from 'utils/responsive';
import { GetPaletteHook } from 'theme';
import { Poppins } from 'theme/fonts';
import { ImgAssets } from '@assets/index';
import { Divider } from 'components';
import { Todo } from './components/todo/todo';
import { ScrollView } from 'react-native-gesture-handler';
import { ElevateBtn } from 'components/elevateBtn/elevateBtn';
import { Modal } from 'components/modal/modal';
import { useState } from 'react';

const HomeScreen = () => {
    const styles = getStyles();

    const [openModal, setOpenModal] = useState(false);
    console.log(openModal)

    return (
        <ImageBackground source={ImgAssets.bg2}
            resizeMode="cover"
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safeArea}
            >
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.container2}>
                        <View style={styles.header}>
                            <Image
                                source={{ uri: 'https://api.dicebear.com/6.x/lorelei-neutral/png?seed=Lilly' }}
                                style={styles.img}
                            />
                            <Divider y={21} />
                            <Text style={styles.name}>Welcome Elian Ramirez</Text>
                        </View>
                        <View style={styles.dashBoard}>
                            <Text style={styles.title}>Today</Text>
                            <Divider y={16} />
                            <View style={styles.todoList}>
                                <Todo />
                            </View>

                            <Divider y={32} />

                            <Text style={styles.title}>Tomorrow</Text>
                            <Divider y={16} />
                            <View style={styles.todoList}>
                                <Todo />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View
                style={styles.elevateBtn}
            >
                <ElevateBtn onPress={() => setOpenModal(true)} />
            </View>
            <Modal isVisible={openModal} close={() => setOpenModal(false)} />
        </ImageBackground>
    )
}

const getStyles = () => {
    const palette = GetPaletteHook();
    return (
        StyleSheet.create({
            container: {
                flex: 1,
            },
            safeArea: {
                flex: 1,
                alignItems: 'center',
            },
            scroll: {
                width: '100%',
                paddingHorizontal: horizontalScale(32),
            },
            container2: {
                width: '100%',
                flex: 1,
                alignItems: 'center',
            },
            header: {
                width: '100%',
                alignItems: 'center',
                paddingTop: verticalScale(74),
            },
            img: {
                width: 112,
                height: 112,
                borderRadius: 56,
            },
            name: {
                color: palette.textPrimary,
                fontFamily: Poppins.SemiBold,
                fontSize: moderateScale(20),
            },
            dashBoard: {
                width: '100%',
                marginTop: verticalScale(64),
                paddingBottom: verticalScale(32),
                flex: 1,
            },
            title: {
                color: palette.textPrimary,
                fontFamily: Poppins.SemiBold,
                fontSize: moderateScale(20),
            },
            todoList: {
                width: '100%',
                backgroundColor: palette.background,
                paddingHorizontal: horizontalScale(16),
                paddingVertical: verticalScale(20),
                borderRadius: 16,
            },
            elevateBtn: {
                position: 'absolute',
                top: verticalScale(64),
                right: 20
            }
        })
    )
}

export { HomeScreen }