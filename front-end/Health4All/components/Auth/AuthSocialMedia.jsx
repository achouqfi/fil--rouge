import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput ,
    SafeAreaView,
    Image,
} from 'react-native';

export default function AuthSocialMedia() {
  return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.GoogleAuth}>
                <Image
                    source={require('../../assets/images/google-logo.jpg')}
                    style={styles.imgSM}
                />
          </TouchableOpacity>
          <TouchableOpacity style={styles.GoogleAuth}>
                <Image
                    source={require('../../assets/images/facebook.jpg')}
                    style={styles.imgSM}
                />
          </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:100
    },
    GoogleAuth:{
        height:50,
        width:50,
        borderWidth:1,
        borderColor:"#DDDADA",
        borderRadius:15,
        padding:10
    },
    imgSM:{
        width:25,
        height:25,
    }
});
