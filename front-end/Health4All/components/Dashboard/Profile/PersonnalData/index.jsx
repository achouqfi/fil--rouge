import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import Header from "../../Notification/Header";
import Icons from "../../../../constants/icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from "react-native-elements";
import { Formik } from "formik";
import HeaderText from "../../../Auth/Header";
import Btn from '../../Home/BtnHome'
import { LinearGradient } from 'expo-linear-gradient';
import ImageUpload from "./ImageUpload";
import Btnauth from "../../../Auth/BtnAuth";

const { Profile, Lock } = Icons;
export default function Index({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState("DD/MM/YYYY");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    setText(day + "/" + month + "/" + year);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const back = () => {
    navigation.push("Dashboard");
  }
  
  return (
    <View style={styles.container}>
      <Header back={back} HeaderTitle={"Personnal Data"} />
      <HeaderText title1={"Let’s complete your profile"} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phone: "",
          photo: "",
          birthday: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ScrollView>
            <ImageUpload />
            <View style={styles.InputContainer}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={{ marginLeft: 10, width: 300 }}
                placeholder="First Name"
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                placeholder="First Name"
                style={{
                  marginLeft: 10,
                  width: 300,
                }}
              />
            </View>
            <View style={styles.InputContainer1} >
              <TextInput
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                value={values.birthday== "" ? text : values.birthday}
                placeholder={text}
                style={{ marginLeft: 10, width: 300 }}
              />
              <LinearGradient
                  colors={[ '#92A3FD','#9DCEFF']}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.btnViewMore}
                  >
                    <TouchableOpacity  onPress={() => showMode("date")} >
                        <Text style={styles.titleBtn}>Select</Text>
                    </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="phone"
                style={{ marginLeft: 10, width: 300 }}
              />
            </View>
            <View style={styles.InputContainer} >
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                style={{ marginLeft: 10, width: 300 }}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                placeholder="Password Confirmation"
                style={{ marginLeft: 10, width: 300 }}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.BtnSubmit}>
              <Btnauth btnTitle={"Save"} onPress={handleSubmit} color1={"#92A3FD"} color2={'#9DCEFF'}  />
            </View>
          </ScrollView>
        )}
      </Formik>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  InputContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F8F8",
    marginHorizontal: 25,
    marginVertical: 8,
    borderRadius: 15,
    paddingHorizontal: 2,
    height: 45,
  },
  InputContainer1: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F7F8F8",
    marginHorizontal: 25,
    marginVertical: 8,
    borderRadius: 15,
    paddingHorizontal: 22,
    height: 45,
  },
  CheckBoxContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: "2%",
  },
  btnViewMore:{
    width:70,
    borderRadius:20,
    height:30,
    marginTop:8,
    marginRight:14,
  },
  titleBtn:{
    paddingHorizontal:4,
    paddingVertical:3,
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
  },
  BtnSubmit:{
    marginTop: 60,
  }
});
