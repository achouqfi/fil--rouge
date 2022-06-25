import Home from '../screens/Dashboard/Home/Home'
import ActivityTracker from '../screens/Dashboard/ActivityTracker/ActivityTracker'
import ProgressTracker from '../screens/Dashboard/ProgressTracker/ProgressTracker'
import Profile from '../screens/Dashboard/Profile/Profile'
import Search from '../screens/Dashboard/Search/Search'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path,Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';
import HomeIcon from '../assets/icons/Home.svg'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    Image
} from 'react-native';
const Tab = createBottomTabNavigator();

import React from 'react';

const Buttomnavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{ 
                showLabel:false
            }}
            screenOptions={{
                tabBarHideOnKeyboard: true
             }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    headerShown :false,
                    tabBarIcon: ({focused})=>(
                        <View style={{ height:30, width:30 }}>
                            <Svg 
                                width="22"
                                height="22"
                                viewBox="0 0 22 22" 
                                fill={"none"}
                                xmlns="http://www.w3.org/2000/Svg" 
                            >
                                <Path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" 
                                    stroke={focused ? "#C58BF2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                />
                            </Svg>                         
                            <View 
                                style={{ 
                                    height:6, 
                                    width:6, 
                                    backgroundColor: focused ? '#C58BF2' : 'white',
                                    borderRadius:10,
                                    marginLeft:8,
                                    marginTop:3
                                }} 
                            />
                        </View>
                    )
                 }} 
            />
            <Tab.Screen 
                name="ActivityTracker" 
                component={ActivityTracker} 
                options={{ 
                    headerShown :false,
                    tabBarIcon: ({focused})=>(
                        <View style={{ height:30, width:30 }}>
                            <Svg 
                                width="22" 
                                height="22" 
                                viewBox="0 0 21 22" 
                                fill={ "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path fill-rule="evenodd"  clip-rule="evenodd"  d="M13.0402 1.0515C14.0502 1.4535 14.3592 2.8535 14.7722 3.3035C15.1852 3.7535 15.7762 3.9065 16.1032 3.9065C17.8412 3.9065 19.2502 5.3155 19.2502 7.0525V12.8475C19.2502 15.1775 17.3602 17.0675 15.0302 17.0675H4.97024C2.63924 17.0675 0.750244 15.1775 0.750244 12.8475V7.0525C0.750244 5.3155 2.15924 3.9065 3.89724 3.9065C4.22324 3.9065 4.81424 3.7535 5.22824 3.3035C5.64124 2.8535 5.94924 1.4535 6.95924 1.0515C7.97024 0.6495 12.0302 0.6495 13.0402 1.0515Z" stroke={focused ? "#C58BF2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M15.4955 6.5H15.5045" stroke={focused ? "#C58BF2" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.179 10.1282C13.179 8.37222 11.756 6.94922 10 6.94922C8.24404 6.94922 6.82104 8.37222 6.82104 10.1282C6.82104 11.8842 8.24404 13.3072 10 13.3072C11.756 13.3072 13.179 11.8842 13.179 10.1282Z" stroke={focused ? "#C58BF2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <View 
                                style={{ 
                                    height:6, 
                                    width:6, 
                                    backgroundColor: focused ? '#C58BF2' : 'white',
                                    borderRadius:10,
                                    marginLeft:8,
                                    marginTop:3
                                }} 
                            />
                        </View>
                    )
                }} 
            />
             <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{ 
                    headerShown :false ,
                    tabBarIcon: ({focused})=>(
                        <LinearGradient
                            colors={[ '#9DCEFF','#92A3FD']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ 
                                height:60, 
                                width:60,
                                backgroundColor:'#92A3FD',
                                borderWidth:4,
                                borderColor: focused ? '#92A3FD' : 'white',
                                borderRadius:30,
                                padding:14,
                                marginBottom:30
                            }}
                        >
                            <Svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 21 21" 
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <Circle cx="8.80541" cy="8.80541" r="7.49047" 
                                    stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M14.0151 14.4043L16.9518 17.3334" 
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <View 
                                style={{ 
                                    height:6, 
                                    width:6, 
                                    borderRadius:10,
                                    marginLeft:8,
                                    marginTop:4
                                }} 
                            />
                        </LinearGradient>
                    )
                }} 
            />
            <Tab.Screen 
                name="ProgressTracker" 
                component={ProgressTracker} 
                options={{ 
                    headerShown :false,
                    tabBarIcon: ({focused})=>(
                        <View style={{ height:30, width:30 }}>

                            <Svg 
                                width="22" 
                                height="22" 
                                viewBox="0 0 21 22" 
                                fill={ "none"} 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path d="M5.24487 13.781L8.23801 9.89088L11.6522 12.5728L14.5813 8.79248" 
                                    stroke={focused ? "#C58BF2" : "black"}
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <Circle cx="17.9954" cy="3.20003" r="1.9222"
                                    stroke={focused ? "#C58BF2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M12.9245 2.12012H5.65679C2.64535 2.12012 0.778076 4.25284 0.778076 7.26428V15.3467C0.778076 18.3581 2.60874 20.4817 5.65679 20.4817H14.2609C17.2724 20.4817 19.1396 18.3581 19.1396 15.3467V8.30776" 
                                    stroke={focused ? "#C58BF2" : "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <View 
                                style={{ 
                                    height:6, 
                                    width:6, 
                                    backgroundColor: focused ? '#C58BF2' : 'white',
                                    borderRadius:10,
                                    marginLeft:8,
                                    marginTop:4
                                }} 
                            />
                        </View>
                    )
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{ 
                    headerShown :false,
                    tabBarIcon: ({focused})=>(
                        <View style={{ height:30, width:30 }}>
                            <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd"  d="M7.98468 13.3462C4.11707 13.3462 0.814209 13.931 0.814209 16.2729C0.814209 18.6148 4.09611 19.2205 7.98468 19.2205C11.8523 19.2205 15.1542 18.6348 15.1542 16.2938C15.1542 13.9529 11.8733 13.3462 7.98468 13.3462Z" stroke={focused ? "#C58BF2" : "black"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path fill-rule="evenodd" clip-rule="evenodd"  d="M7.98464 10.0059C10.5227 10.0059 12.5799 7.94779 12.5799 5.40969C12.5799 2.8716 10.5227 0.814453 7.98464 0.814453C5.44655 0.814453 3.38845 2.8716 3.38845 5.40969C3.37988 7.93922 5.42369 9.99731 7.95226 10.0059H7.98464Z" stroke={focused ? "#C58BF2" : "black"} stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                            <View 
                                style={{ 
                                    height:6, 
                                    width:6, 
                                    backgroundColor: focused ? '#C58BF2' : 'white',
                                    borderRadius:10,
                                    marginLeft:5,
                                    marginTop:4
                                }} 
                            />
                        </View>
                    )
                }} 
            />
        </Tab.Navigator>
    );
}

export default Buttomnavigation;