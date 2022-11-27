import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feeds from '../screens/app/Feeds';
import Profile from '../screens/app/Profile';
import ExproleFeeds from '../screens/app/ExproleFeeds';

const AppNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopColor: '#FAFAFA',
                    elevation: 0,
                    height: 50,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                tabBarShowLabel: false,
                tabBarIconStyle: {
                    marginBottom: 5,
                },
            }

        } >
            <Tab.Screen name="feeds" component={Feeds} />
            <Tab.Screen name="explore" component={ExproleFeeds} />
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default AppNavigator