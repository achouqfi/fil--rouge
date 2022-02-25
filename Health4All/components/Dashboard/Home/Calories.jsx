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
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };

const Calories = () => {
    return (
        <View style={styles.container}>
            <View>
                <HeaderStat title1={'Calories'} titleDesc={"760 kCal"} />
            </View>
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
    }
  });
  