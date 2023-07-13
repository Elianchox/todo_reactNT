import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalRN from 'react-native-modal';
import { GetPaletteHook } from 'theme';
import { horizontalScale, moderateScale, verticalScale } from 'utils/responsive';

const Modal = ({
    isVisible,
    close
}: {
    isVisible: boolean,
    close: () => void
}) => {

    const palette = GetPaletteHook();

    return (
        <ModalRN
            isVisible={isVisible}
            backdropColor='rgba(13, 13, 13, 0.4)'
            statusBarTranslucent
            style={{ margin: 0, flex: 1, justifyContent: 'flex-end' }}
            coverScreen
            onBackdropPress={close}
        >
            <View
                style={{
                    backgroundColor: palette.background,
                    height: '80%',
                    width: '100%',
                    borderRadius: 24,
                }}
            >
                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: horizontalScale(24),
                        paddingVertical: verticalScale(16),
                        borderBottomWidth: 0.18,
                        borderBottomColor: palette.textSecondary,
                    }}
                >
                    <TouchableOpacity
                        onPress={close}
                    >
                        <Text
                            style={{
                                color: palette.info,
                                fontSize: moderateScale(18)
                            }}
                        >Close</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ModalRN>
    )
}

export { Modal }