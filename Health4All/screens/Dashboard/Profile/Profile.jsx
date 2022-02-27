import React, {useEffect, useRef} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Header from '../../../components/Dashboard/Notification/Header'

export default function Profile({navigation}) {
  function back(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
          <Header back={back} HeaderTitle={'Profile'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'white',
    flex:1
}
});
