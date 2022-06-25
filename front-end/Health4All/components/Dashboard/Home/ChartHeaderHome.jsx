import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import Svg, { Path, Circle, G , Filter, Defs ,FeFlood, FeColorMatrix, FeOffset,FeGaussianBlur , FeBlend  } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';
import BtnHome from './BtnHome'


export default function ChartHeaderHome() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/images/Banner-Background.jpg')} 
        resizeMode="cover" 
        style={styles.imageBack}>
          <View>
            <Text style={styles.title1}>BMI (Body Mass Index)</Text>
            <Text style={styles.title2}>You have a normal weight</Text>
            <View style={styles.containerBtn}>
              <BtnHome color1={'#EEA4CE'} color2={'#C58BF2'} btnTitle={'View More'} />
            </View>
          </View>
          <View style={styles.statContainer}>
            <Svg width="106" style={styles.svgPrt} height="97" viewBox="0 0 106 97" fill="none" xmlns="http://www.w3.org/2000/svg">
              <G filter="url(#filter0_d_1020_2345)">
                <Path d="M78 65C80.8829 65 82.3244 65 83.219 63.9979C84.1136 62.9958 83.9626 61.6681 83.6607 59.0127C83.0187 53.3661 81.4712 47.8462 79.0657 42.6688C75.8154 35.6728 71.0771 29.4707 65.1817 24.4956C59.2863 19.5204 52.3759 15.8922 44.9331 13.8642C39.4249 12.3634 33.7234 11.7658 28.0493 12.0822C25.3809 12.231 24.0467 12.3054 23.2093 13.3557C22.3719 14.4061 22.6142 15.827 23.0988 18.6689L30.1488 60.0087C30.5554 62.3932 30.7588 63.5854 31.5969 64.2927C32.435 65 33.6445 65 36.0634 65H78Z" fill="#C58BF2"/>
              </G>
            </Svg>
          </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:0,
      height:136,
      borderRadius:22,
      marginTop:7,
    },
    imageBack: {
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:146,
      borderTopRightRadius:32,
      paddingVertical:20
    },
    title1:{
      fontSize:19,
      color:'white',
      fontWeight:'700'
    },
    title2:{
      fontSize:14,
      color:'#FFFFFF',
      fontStyle:'normal'
    },
    btnViewMore:{
      marginLeft:15,
      marginTop:17,
      width:110,
      borderRadius:30
    },
    titleBtn:{
      paddingHorizontal:22,
      paddingVertical:10,
      color:'white',
      fontSize:13,
      fontWeight:'bold'
    },
    statContainer:{
      backgroundColor:"white",
      height:90,
      width:90,
      borderRadius:50,
      marginLeft:'-6%'
    },
    svgPrt:{
      marginLeft:14,
      marginTop:'-20%'
    },
    prc:{
      color:'white',
      textAlign:'center',
      marginTop:'27%',
      fontWeight:'bold',
      fontStyle:'italic'
    },
    containerBtn:{
      marginVertical:18,
      marginLeft:22
    }
});
