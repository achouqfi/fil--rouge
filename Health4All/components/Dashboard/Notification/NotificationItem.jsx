import React, {useEffect,useState ,useRef} from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions 
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"

const NotificationItem = ({item}) => {
    var width = Dimensions.get('window').width;
    return (
        <View style={[styles.container, {width}]} > 
            <Image
                source={item.image}
                style={[styles.image]}
            />
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
            </View>
            <View style={styles.option}>
            <Svg width="14" height="50" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.00008 7.58341C7.32225 8.58341 7.58341 7.32225 7.58341 7.00008C7.58341 6.67792 7.32225 6.41675 7.00008 6.41675C6.67792 6.41675 6.41675 6.67792 6.41675 7.00008C6.41675 7.32225 6.67792 7.58341 7.00008 7.58341Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M7.00008 3.49992C7.32225 3.49992 7.58341 3.23875 7.58341 2.91659C7.58341 2.59442 7.32225 2.33325 7.00008 2.33325C6.67792 2.33325 6.41675 2.59442 6.41675 2.91659C6.41675 3.23875 6.67792 3.49992 7.00008 3.49992Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M7.00008 11.6667C7.32225 11.6667 7.58341 11.4055 7.58341 11.0833C7.58341 10.7612 7.32225 10.5 7.00008 10.5C6.67792 10.5 6.41675 10.7612 6.41675 11.0833C6.41675 11.4055 6.67792 11.6667 7.00008 11.6667Z" fill="#ADA4A5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
    //   justifyContent:'space-around',
      borderColor:"#DDDADA",
      borderBottomWidth:1,
      padding:14
    },

    image:{
        width:50,
        height:50
    },
    title:{
        color:'black',
        fontSize:13,
        fontWeight:'bold'
    },
    description:{
        fontSize:12,
        marginTop:6
    },
    NotifitemText:{
        marginLeft:'4%',
        width:'70%'
        
    }
});

export default NotificationItem;
