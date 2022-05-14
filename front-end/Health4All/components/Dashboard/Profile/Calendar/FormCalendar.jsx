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
import { Formik } from "formik";
import DateTimePicker from '@react-native-community/datetimepicker';
import Btnauth from "../../../Auth/BtnAuth";
import { LinearGradient } from 'expo-linear-gradient';
import HeaderText from "../../../Auth/Header";

export default function FormCalendar() {
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
    return (
        <View style={ styles.container } >
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
                <> 
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
                    <Text>hello</Text>
                    <View style={styles.BtnSubmit}>
                        <Btnauth btnTitle={"Saxxve"} onPress={handleSubmit} color1={"#92A3FD"} color2={'#9DCEFF'}  />
                    </View>
                </>
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

//styles compoenent 
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:"50%",
    },
    InputContainer: {
        flexDirection: "row",
        backgroundColor: "#F7F8F8",
        marginHorizontal: 25,
        marginVertical: 8,
        borderRadius: 15,
        paddingHorizontal: 2,
        height: 45,
        width: "90%",
    },
    InputContainer1: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#F7F8F8",
        marginHorizontal: 25,
        marginVertical: 8,
        borderRadius: 15,
        paddingHorizontal: 22,
        width: "90%",
        height: 45,
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
        marginTop: 50,
    }
});