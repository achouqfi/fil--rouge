import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import LatestActivity from '../../../components/Dashboard/ActivityTracker/LatestActivity'
import Header from '../../../components/Dashboard/Notification/Header'
import HeaderActivityTracker from '../../../components/Dashboard/ActivityTracker/HeaderActivityTracker'
import ActivityProgress from '../../../components/Dashboard/ActivityTracker/ActivityProgress'
import { Modal, Button, Input, Center, NativeBaseProvider } from "native-base";

export default function ActivityTracker({navigation}) {

  const back = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <Header back={back} HeaderTitle={'Activity Tracker'} />
          <HeaderActivityTracker />
          <Text style={styles.ActivityStatusTitle}>Food nutritionist value</Text>
          <ActivityProgress />
        </NativeBaseProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex:1
    },
    ActivityStatusTitle:{
      marginLeft:"10%",
      fontSize:18,
      fontWeight:'bold',
      marginVertical:14
    },
    LatestActivityContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:10
    },
    seeMore:{
      marginRight:'10%',
      fontSize:14,
      marginTop:10,
      color:'#7B6F72'
    }
});
