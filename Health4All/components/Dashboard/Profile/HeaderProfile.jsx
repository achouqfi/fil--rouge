import React, {useEffect,useState, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    FlatList,
    Image
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"
import Btn from '../Home/BtnHome'
import UserDataItem from './UserDataItem'

var width = Dimensions.get('window').width;

export default function HeaderProfile() {
    const UserData = [
        { 
            id:1,
            number:'180cm',
            title:'Height',
        },        
        { 
            id:2,
            number:'65kg',
            title:'Weight',
        },        
        { 
            id:3,
            number:'22yo',
            title:'Age',
        }   
    ];
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <Image
                source={require('../../../assets/images/Latest-Pic.jpg')}
            />
            <View style={styles.infoUser}>
                <Text style={styles.name}>Stefani Wong</Text>
                <Text  style={styles.objt}>Lose a Fat Program</Text>
            </View>
            <View style={styles.btn}>
                <Btn btnTitle={"Edit"} color1={"#92A3FD"} color2={'#9DCEFF'}  />
            </View>
        </View>
        <View style={styles.userData}>
            <FlatList 
                data={UserData} 
                renderItem={({item})=> <UserDataItem item={item} />}
                showsVerticalScrollIndicator ={true}
                keyExtractor={(item)=> item.id}
                horizontal
            />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginBottom:5
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        paddingVertical:10
    },
    name:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    },
    objt:{
        fontSize:14,
        marginTop:3
    },
    btn:{
        marginTop:"4%"
    },
    userData:{
        width: width,
        marginLeft:30,
    },
    infoUser:{
        marginTop:5
    }

});

