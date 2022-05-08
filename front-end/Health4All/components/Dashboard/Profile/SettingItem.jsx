import {
  StyleSheet,
  View,
  FlatList,
  Text,
  StatusBar,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Setting from "./Setting";
import Profile from "../../../assets/icons/Profile.svg";
import Arrow from "../../../assets/icons/Arrow.svg";
import Document from "../../../assets/icons/Document.svg";
import Graph from "../../../assets/icons/Graph.svg";
import Chart from "../../../assets/icons/Chart.svg";
import Notification from "../../../assets/icons/Notification.svg";
import Message from "../../../assets/icons/Message.svg";
import ShieldDone from "../../../assets/icons/ShieldDone.svg";
import Settingicon from "../../../assets/icons/Setting.svg";

export default function SettingItems({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const list1 = [
    {
      id: 1,
      icon: <Profile />,
      title: "Personnel Data",
      navigateTo : ()=> navigation.push('PersonnalData'),
      to: <Arrow />
    },
    {
      id: 2,
      icon: <Document />,
      title: "Achiement",
      navigateTo : ()=> navigation.push('Achirment'),
      to: <Arrow />      
    },
    {
      id: 3,
      icon: <Graph />,
      title: "Activity History",
      navigateTo : ()=> navigation.push('ActivityHistoty'),
      to: <Arrow />
    },
    {
      id: 4,
      icon: <Chart />,
      title: "Confidentiality",
      navigateTo : ()=> navigation.push('Confidentiality'),
      to: <Arrow />      
    },
  ];

  const list2 = [
    {
      id: 1,
      icon: <Message />,
      title: "Contact Us",
      navigateTo : ()=> navigation.push('ContactUs'),
      to: <Arrow />          
      },
    {
      id: 2,
      icon: <ShieldDone />,
      title: "Privacy Policy",
      navigateTo : ()=> navigation.push('PrivacyPolicy'),
      to:  <Arrow />
    },
    {
      id: 3,
      icon: <Settingicon />,
      title: "Settings",
      navigateTo : ()=> navigation.push('Settings'),
      to: <Arrow />      
    },
  ];

  const list3 = [
    {
      id: 1,
      icon: <Notification />,
      title: "Pop-up Notification",
      to: (
        <View style={styles.Switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#9DCEFF" }}
            thumbColor={isEnabled ? "#92A3FD" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      ),
    },
  ];

  return (
    <View>
      <View style={styles.ProfileParamsContainer}>
        <Text style={styles.title}>Account</Text>
        <FlatList
          data={list1}
          renderItem={Setting}
          keyExtractor={(item) => "item.id"}
        />
      </View>
      <View style={styles.ProfileParamsContainer}>
        <Text style={styles.title}>Notification</Text>
        <FlatList
          data={list3}
          renderItem={Setting}
          keyExtractor={(item) => "item.id"}
        />
      </View>
      <View style={styles.ProfileParamsContainer}>
        <Text style={styles.title}>Other</Text>
        <FlatList
          data={list2}
          renderItem={Setting}
          keyExtractor={(item) => "item.id"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  ProfileParamsContainer: {
    backgroundColor: "white",
    marginHorizontal: 25,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 15,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    marginBottom: 12,
  },
  Switch: {
    marginLeft: -29,
    marginTop: -15,
  },
});
