import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Dimensions,
    Animated,
    FlatList,
    StatusBar,
    ScrollView
} from 'react-native';
import {
  Text,
  ListItem,
  Icon,
} from 'react-native-elements';
import Header from '../../../components/Dashboard/Notification/Header'
import HeaderProfile from '../../../components/Dashboard/Profile/HeaderProfile'
import Options from '../../../components/Dashboard/Profile/Setting'

var width = Dimensions.get('window').width;

export default function Profile({navigation}) {
  function back(){
    navigation.goBack();
  }

  
  return (
    <View style={styles.container}>
        <Header back={back} HeaderTitle={'Profile'} />
        <HeaderProfile />
       {/* <Options /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#FFFFFF',
    flex:1
  },
  ProfileParamsContainer:{
    width: width-45,
    backgroundColor:'white',
    marginHorizontal:25,
    marginVertical:8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    borderRadius:15,
    padding:20
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  }
});
