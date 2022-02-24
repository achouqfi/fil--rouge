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
import { LinearGradient } from 'expo-linear-gradient';

const HeaderStat = ({ title1, titleDesc }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>{title1} </Text>
            <Text  style={styles.titleDesc}>{titleDesc} </Text>
        </View>
    );
}

export default HeaderStat;



const styles = StyleSheet.create({
    container: {
      paddingLeft:12
    },
    title1:{
      color:'black',
      fontSize:15,
      fontWeight:'600',

    },
    titleDesc:{
      color:'#9DCEFF',
      fontSize:15,
      fontWeight:'bold',

    }
  });
  
  
