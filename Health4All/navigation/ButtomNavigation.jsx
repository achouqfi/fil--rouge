import Home from '../screens/Dashboard/Home/Home'
import ActivityTracker from '../screens/Dashboard/ActivityTracker/ActivityTracker'
import ProgressTracker from '../screens/Dashboard/ProgressTracker/ProgressTracker'
import Profile from '../screens/Dashboard/Profile/Profile'
import Search from '../screens/Dashboard/Search/Search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import React from 'react';

const Buttomnavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown :false }} />
            <Tab.Screen name="ActivityTracker" component={ActivityTracker} options={{ headerShown :false }} />
            <Tab.Screen name="ProgressTracker" component={ProgressTracker} options={{ headerShown :false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown :false }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown :false }} />
        </Tab.Navigator>
    );
}

export default Buttomnavigation;