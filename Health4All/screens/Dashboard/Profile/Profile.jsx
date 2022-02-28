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
import Setting from '../../../components/Dashboard/Profile/Setting'
import { SvgXml  } from 'react-native-svg';
import icon from '../../../constants/icons'

// const { graph, iconProfile, document, chart  } = icon
var width = Dimensions.get('window').width;

// iconProfile=`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle opacity="0.2" cx="25" cy="25" r="25" fill="white"/>
// </svg>
// `
const list1= [
  {
    id:1,
    title: 'Personnel Data',
    // icon:
    //   <SvgXml 
    //       width="100px"
    //       xml={iconProfile}
    //   />
  },
  {
    id:2,
    title: 'Achiement',
  //   icon:
  //     <SvgXml 
  //         width="100%"
  //         height="100%"
  //         xml={document}
  //     /> 
  },
  {
    id:3,
    title: 'Activity History',
    // icon:
    //   <SvgXml 
    //       width="100%"
    //       height="100%"
    //       xml={chart} 
    //   />

  },
  {
    id:4,
    title: 'Workout Prpgress',
    // icon:
    //   <SvgXml 
    //       width="100%"
    //       height="100%"
    //       xml={graph} 
    //   />

  }
];

const list2= [
  {
    id:1,
    title: 'Contact Us',
    // icon:
    //   <SvgXml 
    //       width="100px"
    //       xml={iconProfile}
    //   />
  },
  {
    id:2,
    title: 'Privacy Policy',
  //   icon:
  //     <SvgXml 
  //         width="100%"
  //         height="100%"
  //         xml={document}
  //     /> 
  },
  {
    id:3,
    title: 'Settings',
    // icon:
    //   <SvgXml 
    //       width="100%"
    //       height="100%"
    //       xml={chart} 
    //   />

  },
];

const list3= [
  {
    id:1,
    title: 'Pop-up Notification',
    // icon:
    //   <SvgXml 
    //       width="100px"
    //       xml={iconProfile}
    //   />
  }
];

export default function Profile({navigation}) {
  function back(){
    navigation.goBack();
  }

  
  return (
    <View style={styles.container}>
        <Header back={back} HeaderTitle={'Profile'} />
        <HeaderProfile />
        <ScrollView>
          <View style={styles.ProfileParamsContainer}>
            <Text style={styles.title}>Account</Text>
            <FlatList
              data={list1}
              renderItem={Setting}
              keyExtractor={(item)=> item.id}
            />
          </View>
          <View style={styles.ProfileParamsContainer}>
            <Text style={styles.title}>Notification</Text>
            <FlatList
              data={list3}
              renderItem={Setting}
              keyExtractor={(item)=> item.id}
            />
          </View>
          <View style={styles.ProfileParamsContainer}>
            <Text style={styles.title}>Other</Text>
            <FlatList
              data={list2}
              renderItem={Setting}
              keyExtractor={(item)=> item.id}
            />
          </View>
        </ScrollView>
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
    marginVertical:14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius:15,
    padding:20
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  }
});
