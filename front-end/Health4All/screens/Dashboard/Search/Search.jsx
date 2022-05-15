import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions ,
    StatusBar
} from 'react-native';
import { SpeedDial } from 'react-native-elements';
import HeaderSearch from '../../../components/Dashboard/Notification/Header'
import Svg, { Path,Ellipse } from "react-native-svg"
import Map from '../../../components/Dashboard/Search/Map'

export default function Search({navigation}) {


  function back(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <HeaderSearch back={back} HeaderTitle={'Search'}/>
        <Map />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'white',
    flex:1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  start:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomWidth:0.5,
    borderColor:"black",
    height:60,
    padding:10
  },
  inputSearch:{
    backgroundColor:'white',
    height:40,
    paddingHorizontal:10,
    width:'80%',
    color:"black",
    borderRadius:5,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  
  },
  SearchContainer:{
    backgroundColor:'#B1D8FF',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomWidth:0.5,
    borderColor:"black",
    padding:10
  },
  svg:{
    padding:8,
    margin:10
  }
});
