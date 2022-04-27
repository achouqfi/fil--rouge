import React, {useEffect,useState, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    FlatList
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"
import NotificationItem from './NotificationItem'

export default function Notification() {
    const listNotification = [
        { 
            id:1,
            title:'Hey, it’s time for lunch',
            desc:'About 1 minutes ago',
            image:require('../../../assets/images/Ellipse-1.jpg')
        },        
        { 
            id:2,
            title:'Hey, let’s add some meals for your b..',
            desc:'About 3 hours ago',
            image:require('../../../assets/images/Ellipse-2.jpg')
        },        
        { 
            id:3,
            title:'Congratulations, You have finished A..',
            desc:'29 May',
            image:require('../../../assets/images/Ellipse-3.jpg')
        },        
        { 
            id:4,
            title:'Ups, You have missed your Lowerbo...',
            desc:'3 April',
            image:require('../../../assets/images/Ellipse.jpg')
        },    
    ];
  
    return (
        <View style={styles.container}>
            <FlatList 
                data={listNotification} 
                renderItem={({item})=> <NotificationItem item={item} />}
                showsVerticalScrollIndicator ={true}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:18
    },
});
