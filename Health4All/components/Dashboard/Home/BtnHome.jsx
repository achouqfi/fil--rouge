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

export default function BtnHome({ color1, color2, btnTitle }) {
  return ( 
    <LinearGradient
        colors={[ color1,color2]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.btnViewMore}
        >
          <TouchableOpacity >
              <Text style={styles.titleBtn}>{btnTitle}</Text>
          </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    btnViewMore:{
      width:105,
      borderRadius:30
    },
    titleBtn:{
      paddingHorizontal:18,
      paddingVertical:7,
      color:'white',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center'
    }
});
