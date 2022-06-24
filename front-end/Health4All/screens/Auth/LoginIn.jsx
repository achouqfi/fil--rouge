import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import Header from '../../components/Auth/Header'
import LoginForm from '../../components/Auth/LoginForm'
import Btnauth from '../../components/Auth/BtnAuth'
import AuthSocialMedia from '../../components/Auth/AuthSocialMedia'
import FooterAuth from '../../components/Auth/FooterAuth'

export default function LoginIn({navigation}) {
    const CreateAccount = () => {
        navigation.push('CreateAccount');
    }

    return (
      <ScrollView  style={styles.container}>
          <Header title1={"Hey there,"}  title2={"Welcome Back"} />
          <LoginForm navigate={navigation} />
          <View style={styles.separatAuth}>
              <View style={styles.separat} />
              <Text style={styles.OrText}>Or</Text>
              <View style={styles.separat} />
          </View>
          {/* <AuthSocialMedia /> */}
          <View style={styles.LoginIn}>
            <Text>Don’t have an account yet?</Text>
            <TouchableOpacity onPress={CreateAccount}>
                <Text style={styles.login}>Register</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingTop:80,
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
      marginTop:20
    },
    login:{
      fontWeight:'bold',
      marginLeft:4,
      color:'#C58BF2'
    }
});
