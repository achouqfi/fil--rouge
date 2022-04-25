import React, { useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FAB } from 'react-native-elements';
import { Calendar } from 'react-native-big-calendar'
import Btnauth from '../../../components/Auth/BtnAuth'

const events = [
  {
    title: 'all day event',
    start: "2022-03-30T09:10:00.000Z",
    end: "2022-03-30T00:02:00.000Z", // same date as `start`
  },
  {
    title: 'Coffee break',
    start: "2022-03-29T00:09:00.000Z",
    end: "2022-03-29T01:10:00.000Z", // same date as `start`
  },
  {
    title: 'Coffee break',
    start: "2022-03-31T00:09:00.000Z",
    end: "2022-03-311T00:10:00.000Z", // same date as `start`
  },
  {
    title: 'Coffee break',
    start: "2022-03-30T04:09:00.000Z",
    end: "2022-03-30T06:10:00.000Z", // same date as `start`
  },
]

export default function ProgressTracker() {
  const [visible, setVisible] = React.useState(true);
  return (
    // <View style={styles.container}>
    //   <Calendar events={events} height={600} />
    //   <FAB
    //     visible={!visible}
    //     onPress={() => setVisible(!visible)}
    //     placement="left"
    //     title="Show"
    //     icon={{ name: 'edit', color: 'white' }}
    //     color="green"
    //   />
    //   <View
    //     visible={!visible}
    //   >
    //     <Text>hello</Text>
    //   </View>
    // </View>
    <View
    style={{
      // alignItems: 'center',
      paddingVertical: 5,
      flexGrow: 1,
    }}
  >
    <Calendar events={events} height={600} />

    <FAB
      visible={visible}
      onPress={() => setVisible(!visible)}
      placement="right"
      title="Hide"
      icon={{ name: 'delete', color: 'white' }}
      color="red"
    />
    <View
      visible={!visible}
    >
      <Text>hello</Text>
      
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    paddingVertical: 5,
    flexGrow: 1,
  },
  containerBtn: {
    height: 40,
    width: '30%',
  },
  containerBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80
  },
  title1: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold'
  }
});
