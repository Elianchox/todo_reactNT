
import { StyleSheet } from 'react-native'
import { GetPaletteHook } from 'theme'
import { Poppins } from 'theme/fonts';
import { moderateScale, verticalScale } from '@utils/responsive';

export const getStyles = () => {
    const palette = GetPaletteHook();
    return (StyleSheet.create({
        container: {
            backgroundColor: palette.primary,
            width: '100%',
            alignItems: 'center',
            paddingVertical: verticalScale(16),
            borderRadius: 16,
        },
        text: {
            fontFamily: Poppins.SemiBold,
            fontSize: moderateScale(18),
            color: palette.textPrimary,
        }
    }))
}