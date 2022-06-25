import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput ,
    SafeAreaView,
    Image,
    Button,
} from 'react-native';
import Icons from '../../constants/icons'
import Btnauth from './BtnAuth'
import { Formik } from "formik";
import axios from 'axios'
const { Profile, Lock } = Icons;

export default function FormLoginAccount({navigate}) {
    const [error , setError] = useState();
    const login = async (values, role) => {
        axios 
            .post(`http://localhost:8000/api/${role}`, values)
            .then(res =>{
                navigate.push('Dashboard');
            })
            .catch(err=>console.log(err))
    };
    
    return (
        <SafeAreaView  style={styles.container}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    login(values, "user/loginUser");
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View style={styles.InputContainer}>
                            <Image
                                source={Lock}
                                width={40}
                                height={40}
                                style={{ 
                                    marginVertical:3
                                }}
                            />
                            <TextInput  
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}      
                                placeholder='Email'
                                style={{ marginLeft:10, width:300 }}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.InputContainer}>
                            <Image
                                source={Lock}
                                width={40}
                                height={40}
                                style={{marginVertical:3}}
                            />
                            <TextInput    
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}      
                                placeholder='Password'
                                style={{ marginLeft:10, width:300 }}
                                secureTextEntry={true}
                                value={values.password}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.CheckBox}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}  >
                            <Btnauth 
                                btnTitle={"Login"} 
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
        marginTop:280, 
        // backgroundColor:"black", 
        // width:'100%', 
        height:'30%' 
    }
});
