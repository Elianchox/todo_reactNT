
import { StyleSheet } from 'react-native';
import { Poppins } from 'theme/fonts';
import { horizontalScale, moderateScale } from 'utils/responsive';
import { GetPaletteHook } from 'theme/index';

export const getStyles = () => {
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