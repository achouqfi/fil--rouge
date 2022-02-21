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
import Icons from '../../constants/icons'
import { CheckBox } from 'react-native-elements';

const { Profile, Lock } = Icons;

export default function FormCreatAccount() {
    const [check1, setCheck1] = useState(false);

    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.InputContainer}>
                <Image
                    source={Profile}
                    width={40}
                    height={40}
                    style={{ 
                        marginVertical:3
                    }}
                />

                <TextInput        
                    placeholder='First Name'
                    style={{ 
                        marginLeft:10, width:300,
                    }}
                />
            </View>
            <View style={styles.InputContainer}>
                <Image
                    source={Profile}
                    width={40}
                    height={40}
                    style={{ 
                        marginVertical:3
                    }}
                />
                <TextInput        
                    placeholder='Last Name'
                    style={{ marginLeft:10, width:300 }}
                />
            </View>
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
                    placeholder='Email'
                    style={{ marginLeft:10, width:300 }}

                />
            </View>
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
                    placeholder='Password'
                    style={{ marginLeft:10, width:300 }}
                    secureTextEntry={true}
                />
            </View>
            <View style={ styles.CheckBoxContainer }>
                <CheckBox
                    style={styles.checked}
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
                <Text style={styles.CheckBox}>By continuing you accept our Privacy Policy and Term of Use</Text>
            </View>   
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
