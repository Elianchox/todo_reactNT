import { View, Text, Platform } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GetPaletteHook } from 'theme'
import { horizontalScale, moderateScale, verticalScale } from 'utils/responsive'
import { SvgIcon } from 'components/svgIcon/svgIconComponent'

const ElevateBtn = ({ onPress }: { onPress: () => void }) => {

    const palette = GetPaletteHook();

    return (
        <TouchableOpacity
            style={{
                width: horizontalScale(72),
                height: verticalScale(72),
                borderRadius: 36,
                backgroundColor: palette.primary,
                justifyContent: 'center',
                alignItems: 'center',
                ...Platform.select({
                    ios: {
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 3.84,
                    },
                    android: {
                        elevation: 5,
                    },
                }),
            }}
            onPress={onPress}
        >
            <SvgIcon icon='PLUS' width={36} height={36} />
        </TouchableOpacity>
    )
}

export { ElevateBtn }