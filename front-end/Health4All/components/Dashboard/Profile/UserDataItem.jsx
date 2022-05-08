import React, {useEffect,useState ,useRef} from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions 
} from 'react-native';

const UserDataItem = ({item}) => {

    return (
        <View style={styles.container} >
            <View>
                <View style={styles.NotifitemText}>
                    <Text style={styles.number}>{item.number}</Text>
                </View>
                <View style={styles.NotifitemText}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:90,
        height:65,
        backgroundColor:'#FFFFFF',
        marginVertical:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        padding:12,
        textAlign:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    number:{
        textAlign:'center',
        color:'#9DCEFF',
        fontWeight:'bold',
        fontSize:15
    },
    title:{
        textAlign:'center',
        fontSize:13
    }
});

export default UserDataItem;