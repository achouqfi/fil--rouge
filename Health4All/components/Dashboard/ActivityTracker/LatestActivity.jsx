import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    FlatList,
    Image
} from 'react-native';
import ActivityItem from './ActivityItem'

const listActivity = [
    { 
        id:1,
        title:'Drinking 300ml Water',
        desc:'About 1 minutes ago',
        image:require('../../../assets/images/Ellipse-1.jpg')
    },        
    { 
        id:2,
        title:'Eat Snack (Fitbar)',
        desc:'About 3 hours ago',
        image:require('../../../assets/images/Ellipse-2.jpg')
    },        
    { 
        id:3,
        title:'Eat Meal (lunch)',
        desc:'About 4 hours ago',
        image:require('../../../assets/images/Ellipse-3.jpg')
    }  
];

export default function LatestActivity() {
    return (
        <View style={styles.container}>
            <FlatList
                data={listActivity} 
                renderItem={({item})=> <ActivityItem item={item} />}
                showsVerticalScrollIndicator ={true}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginBottom:30
    }
});
