import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    Image
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
            <View style={styles.CardTarget}>
                <Image 
                    source={require('../../../assets/images/object.jpg')}
                    style={styles.img}
                />
                <View>
                    <Text>8L</Text>
                    <Text>Water Intake</Text>
                </View>
            </View>
            <View style={styles.CardTarget}>
                <Image 
                    source={require('../../../assets/images/Group.jpg')}
                    style={styles.img}
                />
                <View>
                    <Text>2400</Text>
                    <Text>Foot Steps</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height:140,
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
    },
    Target:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    CardTarget:{
        backgroundColor:'white',
        width:'46%',
        flexDirection:'row',
        padding:12,
        borderRadius:15
    },
    
});
