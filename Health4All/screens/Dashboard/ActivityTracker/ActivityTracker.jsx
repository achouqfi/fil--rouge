import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    StatusBar
} from 'react-native';
import Header from '../../../components/Dashboard/Notification/Header'
import HeaderActivityTracker from '../../../components/Dashboard/ActivityTracker/HeaderActivityTracker'

export default function ActivityTracker({navigation}) {
  function back(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <Header back={back} HeaderTitle={'Activity Tracker'} />
        <HeaderActivityTracker />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop:StatusBar.currentHeight,
      backgroundColor:'white',
      flex:1
    }
});
