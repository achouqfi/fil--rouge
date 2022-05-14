import React, {useEffect, useRef} from 'react'
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

export default function ProgressTracker({navigation}) {

  const back = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Header back={back} HeaderTitle={'Progress Tracker'} />
      <Text>ProgressTracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'white',
    flex:1
  },
});