import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GetPaletteHook } from 'theme'
import { SvgIcon } from 'components/svgIcon/svgIconComponent'

const CheckBox = () => {

    const palette = GetPaletteHook();
    const [isCheck, setIsCheck] = useState(false);

    return (
        <TouchableOpacity
            style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                backgroundColor: palette.backgroundInput,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() => setIsCheck(pre => !pre)}
        >
            {isCheck && <SvgIcon width={20} height={20} icon='CHECK' />}
        </TouchableOpacity>
    )
}

export { CheckBox }