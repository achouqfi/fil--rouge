import React, {useEffect, useRef} from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Animated,
    FlatList,
    StatusBar,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {
  Text,
  ListItem,
  Icon,
} from 'react-native-elements';
import Header from '../../../components/Dashboard/Notification/Header'
import Calendar from '../../../components/Dashboard/Profile/Calendar/Index'

export default function ProgressTracker({navigation}) {

  const back = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header back={back} HeaderTitle={'Progress Tracker'} />
      <Calendar />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex:1
  },
});