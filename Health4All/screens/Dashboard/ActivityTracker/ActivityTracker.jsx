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
import LatestActivity from '../../../components/Dashboard/ActivityTracker/LatestActivity'
import Header from '../../../components/Dashboard/Notification/Header'
import HeaderActivityTracker from '../../../components/Dashboard/ActivityTracker/HeaderActivityTracker'
import ActivityProgress from '../../../components/Dashboard/ActivityTracker/ActivityProgress'

export default function ActivityTracker({navigation}) {
  function back(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <Header back={back} HeaderTitle={'Activity Tracker'} />
        <HeaderActivityTracker />
        <View>
          <Text style={styles.ActivityStatusTitle}>Activity Progress</Text>
          <ActivityProgress />
        </View>
        <View>
            <View style={styles.LatestActivityContainer} >
              <Text style={styles.ActivityStatusTitle}>Latest Activity</Text>
              <TouchableOpacity>
                <Text style={styles.seeMore}>See more</Text>
              </TouchableOpacity>
            </View>
            <LatestActivity />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop:StatusBar.currentHeight,
      backgroundColor:'white',
      flex:1
    },
    ActivityStatusTitle:{
      marginLeft:"8%",
      marginTop:10,
      fontSize:18,
      fontWeight:'bold'
    },
    LatestActivityContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    seeMore:{
      marginRight:'10%',
      fontSize:14,
      marginTop:10,
      color:'#7B6F72'
    }
});
