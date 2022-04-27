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
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';

const { Profile, Lock } = Icons;

export default function FormCreateAccount1() {
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
                    placeholder='Choose Gender'
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
                    placeholder='Date of Birth'
                    style={{ marginLeft:10, width:300 }}
                />
            </View>
            <View style={styles.Weight}>
                <View style={[styles.InputContainer, styles.WeightContainer]}>
                    <Image
                        source={Lock}
                        width={40}
                        height={40}
                        style={{ 
                            marginVertical:3
                        }}
                    />
                    <TextInput        
                        placeholder='Your Weight'
                        style={{ marginLeft:10, width:300 }}
                    />
                </View>
                <View>
                    <LinearGradient
                        colors={[ '#EEA4CE','#C58BF2']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.btnContainer}>
                        <Text style={{ color:'white',fontSize:13, fontWeight:'bold' }}>KG</Text>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.Weight}>
                <View style={[styles.InputContainer, styles.WeightContainer]}>
                    <Image
                        source={Lock}
                        width={40}
                        height={40}
                        style={{ 
                            marginVertical:3
                        }}
                    />
                    <TextInput        
                        placeholder='Your Height'
                        style={{ marginLeft:10, width:300 }}
                    />
                </View>
                <View>
                    <LinearGradient
                        colors={[ '#EEA4CE','#C58BF2']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.btnContainer}>
                        <Text style={{ color:'white',fontSize:13, fontWeight:'bold' }}>CM</Text>
                    </LinearGradient>
                </View>
            </View> 
        </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 0.4
    },
    InputContainer:{
        flexDirection:'row',
        backgroundColor:"#F7F8F8",
        marginHorizontal:25,
        marginVertical:10,
        borderRadius:15,
        paddingHorizontal:2,
        height:45
    },
    WeightContainer:{
        width:'75%'
    },
    Weight:{
        flexDirection:'row',
        marginRight:24
    },
    btnContainer:{
        height:45,
        width:45,
        borderRadius:15,
        padding:12,
        color:'white',
        marginTop:'25%'
    }
});
