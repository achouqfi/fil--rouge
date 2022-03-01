import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ImageBackground
} from 'react-native';

export default function HeaderActivityTracker() {
  return (
    <View style={styles.container}>
        <View style={styles.headerTarget}>
            <Text style={styles.targerTitle}>Today Target</Text>
            <TouchableOpacity>
                <Text style={[styles.targerTitle,styles.targerAdd ]}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Target}>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height:136,
      borderRadius:28,
      marginVertical:15,
      marginHorizontal:20,
      backgroundColor:'#EAF0FF',
      padding:20,
    },
    headerTarget:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    targerTitle:{
        color:"black",
        fontSize:18,
        fontWeight:'bold'
    },
    targerAdd:{
        color: "white",
        backgroundColor:"#9DCEFF",
        height:30,
        width:30,
        textAlign:'center',
        fontSize:22,
        fontWeight:'300',
        borderRadius:10,
    }
});
