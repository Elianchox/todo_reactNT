
import { StyleSheet } from 'react-native';
import { GetPaletteHook } from 'theme';
import { horizontalScale, moderateScale, verticalScale } from 'utils/responsive';
import { Poppins } from 'theme/fonts';

export const getStyles = () => {
    const palette = GetPaletteHook();
    return (
        StyleSheet.create({
            container: {
                width: '100%',
            },
            input: {
                //input
                width: '100%',
                backgroundColor: palette.backgroundInput,
                paddingVertical: verticalScale(14),
                paddingHorizontal: horizontalScale(16),
                borderRadius: 20,


                //Font
                fontSize: moderateScale(16),
                fontFamily: Poppins.Regular,
                color: palette.textColorInput,
            },
            error: {
                color: palette.error,
                fontFamily: Poppins.Regular,
                fontSize: moderateScale(16),
                paddingHorizontal: horizontalScale(4)
            }
        })
    )
}