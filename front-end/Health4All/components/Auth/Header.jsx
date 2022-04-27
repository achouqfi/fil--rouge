import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView
} from 'react-native';

export default function Header({title1, title2}) {
  return (
    <SafeAreaView  style={styles.container}>
        <Text style={styles.title1} >{title1}</Text>
        <Text style={styles.title2} >{title2}</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:20
    },
    title1:{
        fontSize:20,
        fontStyle:'normal'
    },
    title2:{
        fontSize:29,
        fontStyle:'normal',
        fontWeight:'bold'
    }
});
