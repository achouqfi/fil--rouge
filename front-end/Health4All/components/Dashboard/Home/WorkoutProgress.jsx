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
import {
  LineChart,
} from 'react-native-chart-kit';

export default function WorkoutProgress() {
  return (
    <View style={styles.container}>   
        <LineChart
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed','Thu','Fri','Sat'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        
        width={380} // from react-native
        height={170}
        yAxisLabel={'%'}
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity ) => `rgba(144, 199, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    width:30,
    marginLeft:15,
    marginRight:400
  }
});
  