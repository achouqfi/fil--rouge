import React, {useEffect,useState, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ImageBackground,
    Image
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"
import Btn from '../Home/BtnHome'

export default function HeaderProfile() {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Image
                source={require('../../../assets/images/Latest-Pic.jpg')}
            />
            <View>
                <Text style={styles.name}>Stefani Wong</Text>
                <Text  style={styles.objt}>Lose a Fat Program</Text>
            </View>
            <View style={styles.btn}>
                <Btn btnTitle={"Edit"} color1={"#92A3FD"} color2={'#9DCEFF'}  />
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        paddingVertical:10
    },
    name:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    },
    objt:{
        fontSize:14,
        marginTop:3
    },
    btn:{
        marginTop:"2%"
    }

});

