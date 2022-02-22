import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView
} from 'react-native';
import Header from '../../../components/Dashboard/Home/Header'
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:10,
      backgroundColor:'white'
    }
});
