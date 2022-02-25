import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons'

export default function NextBtn({percentage,scrollTo}) {
  const size = 80;
  const strokeWidth = 2;
  const center = size/2;
  const radius = size/2 - strokeWidth /2
  const circumference = 2 * Math.PI * radius

  const progressAnimation = useRef(new Animated.Value(0)).current
  const progressRef = useRef(null)

  const animation = (toValue) =>{
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 150,
      useNativeDriver:true
    }).start()
  }

  useEffect(()=>{
    animation(percentage)
  },[percentage])


  useEffect(()=>{
    progressAnimation.addListener(
      (value)=>{
        const strokeDashoffset = circumference- ( circumference * value.value ) / 100

        if(progressRef?.current){
          progressRef.current.setNativeProps({
            strokeDashoffset
          })
        }
    },[percentage])
  })



  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G>
          <Circle cx={center} cy={center} r={radius} stroke="white" strokeWidth={strokeWidth}   />
          <Circle 
            ref={progressRef}
            cx={center}
            cy={center}
            r={radius} 
            stroke="#92A3FD" 
            strokeWidth={strokeWidth + 1 }  
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) /100}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6} >
        <AntDesign size={32} name="arrowright" color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:270,
      marginBottom:20
    },
    button:{
      position:'absolute',
      backgroundColor:'#92A3FD',
      borderRadius:100,
      padding:20
    }
});