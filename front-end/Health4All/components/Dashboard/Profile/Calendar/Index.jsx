import React, { useState, useEffect } from "react";
import Header from "../../Notification/Header";
import { SpeedDial, Overlay } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import FormCalendar from './FormCalendar';

import { Calendar } from "react-native-big-calendar";

const events = [
  {
    title: "all day event",
    start: "2022-05-15T09:10:00.000Z",
    end: "2022-05-150T00:02:00.000Z",
  },  
  {
    title: "all day dance",
    start: "2022-05-15T09:11:00.000Z",
    end: "2022-05-150T00:02:00.000Z",
  },
  {
    title: "Coffee break",
    start: "2022-05-19T00:09:00.000Z",
    end: "2022-05-19T01:10:00.000Z",
  },
  {
    title: "Coffee break",
    start: "2022-05-15T00:09:00.000Z",
    end: "2022-05-15T02:12:00.000Z",
  },
  {
    title: "Coffee break",
    start: "2022-05-10T04:09:00.000Z",
    end: "2022-05-10T06:10:00.000Z",
  },
];

export default function Index({ navigation }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const back = () => {
    navigation.push("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Header back={back} HeaderTitle={"My Calendar"} />
      <Calendar
        events={events}
        height={600}
        showAdjacentMonths={false}
        activeDate= { Date.now() }
        showTime= {true}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <FormCalendar />
      </Overlay>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={toggleOverlay}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Refresh screen')}
        />
      </SpeedDial>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
  },
});
