import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput ,
    SafeAreaView,
    Image,
} from 'react-native';

const Btnauth = ({btnTitle, to, marginTop,}) => {
    return (
        <TouchableOpacity onPress={to} style={styles.container}>
            <LinearGradient
                colors={[ '#9DCEFF','#92A3FD']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ 
                    width:"85%",
                    height:"90%",
                    borderRadius:30,
                 }}>
                <Text style={styles.title1}>{btnTitle}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0.08,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    title1:{
        fontSize:20,
        fontStyle:'normal',
        textAlign:'center',
        color:"white",
        paddingVertical:"4%",
        fontWeight:'bold',
    },
    btnContainer:{
        width:"85%",
        height:"90%",
        borderRadius:30
    }
});
export default Btnauth;
