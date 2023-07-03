
import { View, Text } from 'react-native';
import { TextInput as TextInputRN } from 'react-native-gesture-handler';
import { Divider } from 'components/divider/dividerComponent';
import { getStyles } from './textInput.styles';
import { TextInputProps } from './textInput.models';

const TextInput = ({
    value,
    onChange,
    placeHolder,
    type = 'text',
    error,
}: TextInputProps) => {
    const styles = getStyles();
    return (
        <View style={styles.container}>
            <TextInputRN
                value={value}
                onChangeText={(e) => onChange(e)}
                secureTextEntry={type === 'password'}
                placeholder={placeHolder}

                style={styles.input}
            />
            <Divider y={6} />
            {error && <Text style={styles.error}>Essto es un error</Text>}
        </View>
    )
}

export { TextInput }