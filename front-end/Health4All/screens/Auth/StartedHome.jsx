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
import FormCreateAccount1 from '../../components/Auth/FormCreateAccount1'
import Btnauth from '../../components/Auth/BtnAuth'


export default function StartedHome({navigation}) {
  function GetStarted(){
    navigation.push('Dashboard');
  }
  
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.img}>
            <Image
                source={require('../../assets/images/splash/splash3.png')}
            />
        </View>
        <View style={styles.textDesc} >
            <Text style={styles.title1}>Welcome, Stefani</Text>
            <Text style={styles.title2}>You are all set now, let’s reach your goals together with us</Text>
        </View>
        <Btnauth 
          btnTitle={"Go To Home"} 
          to={GetStarted}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    separatAuth:{
      width:"100%",
      marginVertical:20,
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    separat:{
      marginRight:35,
      marginLeft:35,
      borderBottomWidth: 1,
      borderColor: "#DDDADA",
      width:'30%',
      height:20,
    },
    OrText:{
      marginTop:8,
      marginHorizontal:0,
      fontSize:15,
      color:'black'
    },
    LoginIn:{
      flex:0.05,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    login:{
      fontWeight:'bold',
      marginLeft:4,
      color:'#C58BF2'
    },
    img:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center'
    },
    textDesc:{
        flex:0.2,
        alignItems:'center',
        // marginTop:18,
        textAlign:'center',
    },
    title2:{
        color:'#7B6F72',
        fontSize:12
    },
    title1:{
        color:'black',
        fontSize:22,
        fontWeight:'bold'
    }
});
