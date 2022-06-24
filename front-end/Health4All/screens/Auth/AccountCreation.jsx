import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Header from '../../components/Auth/Header'
import FormCreatAccount from '../../components/Auth/FormCreatAccount'
import Btnauth from '../../components/Auth/BtnAuth'
import AuthSocialMedia from '../../components/Auth/AuthSocialMedia'
import FooterAuth from '../../components/Auth/FooterAuth'

export default function AccountCreation({navigation}) {

  function LoginIn(){
    navigation.push('LoginIn');
  }

  function completeProfile(){
    navigation.push('CreateAccount1');
  }

  return (
    <ScrollView  style={styles.container}>
        <Header title1={"Hey there,"}  title2={"Create an Account"} />
        <FormCreatAccount navigate={navigation} />
        <View style={styles.separatAuth}>
            <View style={styles.separat} />
              <Text style={styles.OrText}>Or</Text>
            <View style={styles.separat} />
        </View>
        <View style={styles.LoginIn}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={LoginIn}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        paddingBottom:50,
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
    }
});
