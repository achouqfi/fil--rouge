import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput ,
    SafeAreaView,
    Image,
} from 'react-native';
import Btnauth from './BtnAuth'
import Icons from '../../constants/icons'
import { CheckBox } from 'react-native-elements';
import { Formik } from "formik";
import axios from 'axios'

const { Profile, Lock } = Icons;

export default function FormCreatAccount({navigate}) {
    const [check1, setCheck1] = useState(false);

    const createAccount = (values, role) =>{
        axios 
        .post(`http://192.168.0.188:8000/api/${role}`, values)
        .then(res =>{
            console.log(res);
            navigate.push('LoginIn');
        })
        .catch(err=>console.log(err))
    }

    return (
        <SafeAreaView  style={styles.container}>
              <Formik
                initialValues={{
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    phone:""
                }}
                onSubmit={(values) => {
                    createAccount(values, "user/addUser");
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View style={styles.InputContainer}>
                            <TextInput  
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}      
                                placeholder='Email'
                                style={{ marginLeft:10, width:300 }}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <TextInput    
                                onChangeText={handleChange("firstName")}
                                onBlur={handleBlur("firstName")}      
                                placeholder='firstName'
                                style={{ marginLeft:10, width:300 }}
                                value={values.firstName}
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <TextInput    
                                onChangeText={handleChange("lastName")}
                                onBlur={handleBlur("lastName")}      
                                placeholder='lastName'
                                style={{ marginLeft:10, width:300 }}
                                value={values.lastName}
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <TextInput    
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}      
                                placeholder='Password'
                                style={{ marginLeft:10, width:300 }}
                                secureTextEntry={true}
                                value={values.password}
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <TextInput    
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}      
                                placeholder='Phone'
                                style={{ marginLeft:10, width:300 }}
                                value={values.phone}
                            />
                        </View>
                        <TouchableOpacity style={styles.btnContainer}  >
                            <Btnauth 
                                btnTitle={"Register"} 
                                to={handleSubmit}
                            />
                        </TouchableOpacity>
                    </>
                 )}
            </Formik>
        </SafeAreaView>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 0.55,
        backgroundColor:'white'
    },
    InputContainer:{
        flexDirection:'row',
        backgroundColor:"#F7F8F8",
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:2,
        height:45,
    },

    CheckBox:{
        width:'32%',
        fontSize:12,
        color:'grey',
        textAlign:'center',
        borderBottomWidth:1,
        borderColor:"grey",
        marginLeft:'35%'
    },
    btnContainer:{ 
        marginTop:120, 
        // backgroundColor:"black", 
        // width:'100%', 
        height:'30%' 
    }
});
