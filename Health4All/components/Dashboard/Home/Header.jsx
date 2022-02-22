import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView
} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView  style={styles.container}>
        <Text style={styles.title1} >dddd</Text>
        <Text style={styles.title2} >kdjked</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        flexDirection:'row',
        justifyContent:'space-around'
    }
});
