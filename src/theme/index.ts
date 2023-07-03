
import { View, Text, useColorScheme } from 'react-native'
import { DARK } from './palettes';
import { PaletteProps } from './palettes/palettes.type';

const GetPaletteHook = () => {

    const colorScheme = useColorScheme();

    if (colorScheme === 'dark') {
        return DARK;
    } else {
        return DARK;
    }
}

export { GetPaletteHook }

export { PaletteProps }