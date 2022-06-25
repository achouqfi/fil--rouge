import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    StatusBar
} from 'react-native';
import HeaderNotification from '../../../components/Dashboard/Notification/Header'
import NotificatonList from '../../../components/Dashboard/Notification/Notification'

export default function Notification({navigation}) {
  function back(){
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
        <HeaderNotification back={back} HeaderTitle={'Notification'} />
        <View>
            <NotificatonList />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight,
        backgroundColor:'white',
        flex:1
    }
});
