import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { Calendar } from 'react-native-big-calendar'

const events = [
  {
    title: 'Meeting',
    start: new Date(2022, 1, 11, 10, 0),
    end: new Date(2022, 1, 11, 10, 30),
  },
  {
    title: 'Coffee break',
    start: new Date(2020, 1, 11, 15, 45),
    end: new Date(2020, 1, 11, 16, 30),
  },
]
export default function ProgressTracker() {
  return (
    <View style={styles.container}>
        <Calendar events={events} height={600} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        marginTop:StatusBar.currentHeight,
        padding: 10
        // backgroundColor:'black'
    }
});
