import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView
} from 'react-native';
import HeaderStat from './HeaderStat'
import { LinearGradient } from 'expo-linear-gradient';

export default function WaterIntake() {
  return (
    <View style={styles.container}>
        <View>
            <View style={styles.targerWater}>
              <View
                style={{ 
                  height:60,
                  backgroundColor:'#DDDADA',
                  borderTopLeftRadius:20,
                  borderTopRightRadius:20
                 }}
              />
            <LinearGradient
                colors={[ "#92A3FD","#9DCEFF"]}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={{ 
                  height:220,
                  width:20,
                  borderBottomLeftRadius:20,
                  borderBottomRightRadius:20
                }}
              />
            </View>
        </View>
        <View>
            <View>
                <HeaderStat title1={'Water Intake'} titleDesc={"4 Liters"} />
            </View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding:20,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  targerWater:{
    height:280,
    width:20,
    borderRadius:20
  }
});

