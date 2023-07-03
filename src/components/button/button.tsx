
import { Text, TouchableOpacity } from 'react-native'
import { getStyles } from './button.styles';

const Button = ({ text, onPress }: { text: string, onPress: () => void }) => {
    const styles = getStyles();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


export { Button }