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
import Svg, { Path,Circle } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';

export default function ChartHeaderHome() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/images/Banner-Background.jpg')} 
        resizeMode="cover" 
        style={styles.image}>
      </ImageBackground>
    </View>
    //   <LinearGradient
    //       colors={[ '#9DCEFF','#9DCEFF','#92A3FD']}
    //       start={{ x: 0, y: 0.5 }}
    //       end={{ x: 1, y: 0.5 }}
    //       style={styles.container}
    //   >
    //     <Svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <Circle opacity="0.2" cx="25" cy="25" r="25" fill="white"/>
    //     </Svg>        
    //     <Svg style={{ marginLeft:'60%' }} width="80" height="80" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <Circle opacity="0.2" cx="25" cy="25" r="25" fill="white"/>
    //     </Svg>        
    //     <View style={{flexDirection:'row', justifyContent:'space-between' }}>
    //       <Svg width="30" style={{ marginLeft:'0%' }} height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <Circle opacity="0.2" cx="25" cy="25" r="25" fill="white"/>
    //       </Svg>
    //       <Svg width="50" style={{ marginLeft:'20%' }} height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <Circle opacity="0.2" cx="25" cy="25" r="25" fill="white"/>
    //       </Svg>
    //     </View>
    // </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:0,
      height:136,
      borderRadius:22,
      marginTop:7
    },
    image: {
      height:136,
      borderTopRightRadius:32
    },
});
