import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native';
import {
    BarChart,
} from 'react-native-chart-kit';



export default function ActivityProgress() {
  return (
    <View style={styles.container}> 
        <BarChart
        data={{
            labels: ['Sun', 'Mon', 'True', 'Web', 'Thu', 'Fri','Sat'],
            datasets: [
            {
                data: [50, 45, 48, 60, 49, 43, 40],
            },
            ],
        }}
        width={Dimensions.get('window').width - 50}
        height={200}
        chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            // decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

        }}
        style={{
            borderRadius: 16,
            marginHorizontal:10,
            padding:5,
            marginVertical:10
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    },
});
