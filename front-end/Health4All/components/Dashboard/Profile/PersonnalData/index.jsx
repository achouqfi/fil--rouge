import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  Image
} from "react-native";
import React, { useState } from 'react';
import Header from "../../Notification/Header";
import Icons from '../../../../constants/icons';
import { CheckBox } from 'react-native-elements';
import { Formik } from "formik";
import HeaderText from '../../../Auth/Header';

const { Profile, Lock } = Icons;
export default function index({ navigation }) {
  const [check1, setCheck1] = useState(false);
  function back() {
    navigation.push("Dashboard");
  }
  return (
    <View style={styles.container}>
      <Header back={back} HeaderTitle={"Personnal Data"} />
      <HeaderText title1={"Let’s complete your profile"} title2={"It will help us to know more about you!"} />

      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phone: "",
          photo:"",
        }}
        onSubmit={values => console.log(values)}
      >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='First Name'
                    style={{ 
                        marginLeft:10, width:300,
                    }}
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='Last Name'
                    style={{ marginLeft:10, width:300 }}
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='Email'
                    style={{ marginLeft:10, width:300 }}
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='Password'
                    style={{ marginLeft:10, width:300 }}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='Password'
                    style={{ marginLeft:10, width:300 }}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput        
                    placeholder='Password'
                    style={{ marginLeft:10, width:300 }}
                    secureTextEntry={true}
                />
            </View>

         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  InputContainer:{
    flexDirection:'row',
    backgroundColor:"#F7F8F8",
    marginHorizontal:25,
    marginVertical:8,
    borderRadius:15,
    paddingHorizontal:2,
    height:45,
  },
  CheckBoxContainer:{
      flexDirection:'row',
      marginHorizontal:20,
      marginTop:"2%",
  },
  CheckBox:{
      marginRight:50,
      width:'80%',
      fontSize:12,
      paddingVertical:10,
      color:'grey',
  }
});
