import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Dimensions
} from 'react-native';
import StatHeaderHome from '../../../components/Dashboard/Home/ChartHeaderHome'
import Header from '../../../components/Dashboard/Home/Header'
import BtnHome from '../../../components/Dashboard/Home/BtnHome'
import WaterIntake from '../../../components/Dashboard/Home/WaterIntake'
import Sleep from '../../../components/Dashboard/Home/Sleep'
import Calories from '../../../components/Dashboard/Home/Calories'
import WorkoutProgress from '../../../components/Dashboard/Home/WorkoutProgress'

export default function Home({navigation}) {
  
  function Notification(){
    navigation.push('Notification');
  }

  function HomeMealPlanner(){
    navigation.push('MealPlanner');
  }

  return (
    <ScrollView style={styles.container}>
        <Header to={Notification} />
        <StatHeaderHome />
        <View style={styles.todayTarget}>
          <Text style={styles.HomeTargerDay}>Today Target</Text>
          <View style={styles.btnHome}>
            <BtnHome btnTitle={"Check"} color1={"#92A3FD"} color2={'#9DCEFF'} />
          </View>
        </View>
        <View>
          <Text style={styles.ActivityStatusTitle}>Activity Status</Text>
          <View style={styles.ActivityStatus2}>
            <View style={styles.HeartRatWaterIntakee}>
                <WaterIntake />
            </View>
            <View style={styles.SleepCalories}>
              <View style={styles.Sleep}>
                <Sleep />
              </View>
              <View style={styles.Calories}>
                <Calories to={HomeMealPlanner} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.ActivityStatusTitle}>Workout Progress</Text>
          <View style={styles.statWorkoutProgressContainer}>
              <WorkoutProgress />
          </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:StatusBar.currentHeight,
      backgroundColor:'white'
    },
    todayTarget:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'#DAEAFF',
      borderRadius:15,
      marginHorizontal:24,
      marginTop:44,
      height:57
    },
    btnHome:{
      marginLeft:'10%'
    },
    HomeTargerDay:{
      color:'black',
      fontWeight:'600',
      fontSize:14
    },
    ActivityStatusTitle:{
      marginLeft:"8%",
      marginTop:25,
      fontSize:18,
      fontWeight:'bold'
    },
    HeartRate:{
      height:150,
      backgroundColor:'#DAEAFF',
      borderRadius:15,
      marginHorizontal:24,
      marginTop:9,
    },
    HeartRatWaterIntakee:{
      backgroundColor:'white',
      width:'45%',
      height:315,
      borderRadius:16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    ActivityStatus2:{
      flexDirection:'row',
      marginTop:15,
      marginHorizontal:24,
      marginBottom:10
    },
    SleepCalories:{
      backgroundColor:'white',
      width:'45%',
      marginLeft:'10%',
    },
    Sleep:{
      height:147,
      backgroundColor:'white',
      borderRadius:16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    Calories:{
      height:147,
      backgroundColor:'white',
      borderRadius:16,
      marginTop:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    statWorkoutProgressContainer:{
      marginBottom:30
    }
});
