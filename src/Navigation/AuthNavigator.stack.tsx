import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='signup'
                options={{ headerShown: false }}
                component={Signup} />
            <Stack.Screen name="login"
                options={{ headerShown: false }}
                component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator