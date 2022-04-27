import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    Dimensions
} from 'react-native';
import HeaderStat from './HeaderStat'
import { LinearGradient } from 'expo-linear-gradient';

const Calories = ({to}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={to}>
                <HeaderStat title1={'Calories'} titleDesc={"760 kCal"} />
                <View style={styles.ChartContainer}> 
                    <View style={styles.borderCalories}>
                      <LinearGradient
                        colors={[ "#92A3FD","#9DCEFF"]}
                        start={{ x: 0.5, y: 0.5 }}
                        end={{ x: 1, y: 1 }}
                        style={{ 
                          height:60,
                          width:60,
                          borderRadius:80,
                          margin:2
                        }}
                      >
                        <Text style={styles.CaloriesLeft}>230kCal left</Text>
                      </LinearGradient>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Calories;


const styles = StyleSheet.create({
    container: {
      padding:15,
      flexDirection:'row',
    },
    targerWater:{
      height:280,
      width:20,
      borderRadius:20
    },
    ChartContainer:{
      marginLeft:25,
      height:75,
      backgroundColor:"#DDDADA",
      width:75,
      borderRadius:70,
      marginTop:5
    },
    CaloriesLeft:{
      textAlign:'center',
      alignItems:'center',
      marginTop:'25%',
      color:'white',
      fontSize:12
    },
    borderCalories:{
      borderWidth:6,
      borderColor:'#93A8FD',
      borderRadius:80
    }
  });
  