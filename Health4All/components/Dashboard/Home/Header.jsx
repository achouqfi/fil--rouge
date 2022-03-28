import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView
} from 'react-native';
import Svg, { Path,Circle, Mask, G } from "react-native-svg"
import Profile from '../../../assets/icons/Profile.svg'
export default function Header({to}) {

  return (
    <SafeAreaView  style={styles.container}>
        <View>
          <Text style={styles.title1} >Welcome Back,</Text>
          <Text style={styles.title2} >Stefani Wong</Text>
        </View>
        <TouchableOpacity onPress={to} style={styles.notification}>
          <Svg width="25" height="25" viewBox="0 0 18 18" fill="white" xmlns="http://www.w3.org/2000/svg">
              <Mask id="mask0_414_4917" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="0" width="15" height="14">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 0.75H16.1227V13.761H2.25V0.75Z" fill="white"/>
              </Mask>
              <G mask="url(#mask0_414_4917)">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.18525 1.875C6.564 1.875 4.737 3.9285 4.737 5.77125C4.737 7.3305 4.30425 8.05125 3.92175 8.68725C3.615 9.198 3.37275 9.6015 3.37275 10.4782C3.498 11.8927 4.43175 12.636 9.18525 12.636C13.9125 12.636 14.8755 11.8597 15 10.4295C14.9977 9.6015 14.7555 9.198 14.4487 8.68725C14.0662 8.05125 13.6335 7.3305 13.6335 5.77125C13.6335 3.9285 11.8065 1.875 9.18525 1.875ZM9.18526 13.761C5.67826 13.761 2.50876 13.5135 2.25001 10.5262C2.24776 9.29025 2.62501 8.66175 2.95801 8.10825C3.29476 7.54725 3.61201 7.0185 3.61201 5.77125C3.61201 3.3465 5.85151 0.75 9.18526 0.75C12.519 0.75 14.7585 3.3465 14.7585 5.77125C14.7585 7.0185 15.0758 7.54725 15.4125 8.10825C15.7455 8.66175 16.1228 9.29025 16.1228 10.4782C15.861 13.5135 12.6923 13.761 9.18526 13.761Z" fill="#1D1617"/>
              </G>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.14876 16.875H9.14726C8.30651 16.8742 7.51076 16.5037 6.90701 15.831C6.69926 15.6007 6.71801 15.2445 6.94901 15.0375C7.18001 14.829 7.53551 14.8477 7.74326 15.0795C8.13176 15.5122 8.63051 15.75 9.14801 15.75H9.14876C9.66851 15.75 10.1695 15.5122 10.5588 15.0787C10.7673 14.8485 11.1228 14.8297 11.353 15.0375C11.584 15.2452 11.6028 15.6015 11.395 15.8317C10.789 16.5045 9.99176 16.875 9.14876 16.875Z" fill="#1D1617"/>
              <Circle cx="12.5" cy="2.5" r="2.5" fill="#F7F8F8"/>
              <Circle cx="12.5" cy="2.5" r="1.5" fill="#FF0000"/>
          </Svg>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:25
    },
    notification:{
      height:40,
      width:40,
      borderWidth:1,
      borderColor:'#F9F6F6',
      padding:6,
      borderRadius:10,
      marginTop:10
    },
    title1:{
      fontSize:15,
      color:'#ADA4A5'
    },
    title2:{
      fontSize:25,
      fontWeight:'bold',
    }
});
