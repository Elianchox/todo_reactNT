
import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from 'utils/responsive';
import { GetPaletteHook } from 'theme';
import { Poppins } from 'theme/fonts';

export const getStyles = () => {
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