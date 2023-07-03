
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from 'screens';

const Stack = createStackNavigator();

export const IndexNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Screen1" component={Welcome} />
        </Stack.Navigator>
    );
}
