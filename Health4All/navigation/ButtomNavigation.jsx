import Home from '../screens/Dashboard/Home/Home'
import Login from '../screens/Auth/LoginIn'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import React from 'react';

const Buttomnavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown :false }} />
        </Tab.Navigator>
    );
}

export default Buttomnavigation;