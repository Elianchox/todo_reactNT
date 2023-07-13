
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, WelcomeScreen } from 'screens';
import { PublicRouteNames } from './routeNames/publicRoutes';

const Stack = createStackNavigator();

export const IndexNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={PublicRouteNames.WELCOME}
        >
            <Stack.Screen
                name={PublicRouteNames.WELCOME}
                component={WelcomeScreen}
            />
            <Stack.Screen
                name={PublicRouteNames.LOGIN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={PublicRouteNames.HOME}
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}
