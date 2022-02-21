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
import Header from '../../components/Auth/Header'
import FormCreateAccount1 from '../../components/Auth/FormCreateAccount1'
import Btnauth from '../../components/Auth/BtnAuth'
import AuthSocialMedia from '../../components/Auth/AuthSocialMedia'
import FooterAuth from '../../components/Auth/FooterAuth'

export default function AccountCreation1({navigation}) {
  function GetStarted(){
    navigation.push('StartedHome');
  }
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.img}>
            <Image
                source={require('../../assets/images/splash/splash7.png')}
            />
        </View>
        <View style={styles.textDesc} >
            <Text style={styles.title1}>Let’s complete your profile</Text>
            <Text style={styles.title2}>It will help us to know more about you!</Text>
        </View>
        <FormCreateAccount1 />
        <Btnauth 
          btnTitle={"Next"} 
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
      // height:20,
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
        flex:0.5
    },
    textDesc:{
        flex:0.1,
        alignItems:'center',
        marginTop:18,
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
