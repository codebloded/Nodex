/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Auth/Login';
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from './src/Navigation/AuthNavigator.stack';
import AppNavigator from './src/Navigation/AppNavigator.tab';


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const statusBackgroundColor = isDarkMode ? "#161B22" : "#f5f5f5";
    return (
        <NavigationContainer>
            <SafeAreaView className="flex-1 font bg-white dark:bg-darkPaperBg" >
                <StatusBar backgroundColor={statusBackgroundColor} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                {/* <AuthNavigator /> */}
                <AppNavigator />
            </SafeAreaView >
        </NavigationContainer>
    );
};


export default App;
