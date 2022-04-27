import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    TextInput,
    Image
} from 'react-native';
import { Button, Overlay, Icon, Input } from 'react-native-elements';
import BtnAdd from '../../Auth/BtnAuth'
export default function HeaderActivityTracker() {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
  return (
      <View>
    <View style={styles.container}> 
        <View style={styles.headerTarget}>
            <Text style={styles.targerTitle}>Today Target</Text>
            <TouchableOpacity  onPress={toggleOverlay}>
                <Text style={[ styles.targerTitle,styles.targerAdd ]}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Target}>
            <View style={styles.CardTarget}>
                <Image 
                    source={require('../../../assets/images/object.jpg')}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.title1}>8L</Text>
                    <Text style={styles.title2}>Water Intake</Text>
                </View>
            </View>
            <View style={styles.CardTarget}>
                <Image 
                    source={require('../../../assets/images/Group.jpg')}
                    style={styles.img1}
                />
                <View>
                    <Text style={styles.title1}>2400</Text>
                    <Text style={styles.title2}>Foot Steps</Text>
                </View>
            </View>
        </View>
    </View>
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
    <View style={styles.headerModal}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <TouchableOpacity onPress={toggleOverlay}>
            <Text>Close</Text>
        </TouchableOpacity>
    </View>
    <Text style={styles.textSecondary}>
        Welcome to React Native Elements
    </Text>
    <TextInput
        placeholder='name'
        errorStyle={{ color: 'red' }}
        style={styles.input}
    />
    <TextInput
        placeholder='Type of target'
        errorStyle={{ color: 'red' }}
        style={styles.input}
    />
    <TextInput
        placeholder='arget'
        errorStyle={{ color: 'red' }}
        style={styles.input}
    />
    <View style={{ flexDirection:'row' }}>
        <Button
            title={'send'}
            backgroundColor={'#92A3FD'}

            style={{ 
                marginLeft: 20,
             }}
            icon={
                <Icon
                    name="send"
                    type="font-awesome"
                    color="white"
                    size={15}
                    iconStyle={{ marginRight: 10 }}
                />
            }
            onPress={toggleOverlay}
        />
    </View>
  </Overlay>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height:150,
      borderRadius:28,
      marginVertical:15,
      marginHorizontal:20,
      backgroundColor:'#EAF0FF',
      padding:20,
    },
    headerTarget:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    targerTitle:{
        color:"black",
        fontSize:18,
        fontWeight:'bold'
    },
    targerAdd:{
        color: "white",
        backgroundColor:"#9DCEFF",
        height:30,
        width:30,
        textAlign:'center',
        fontSize:20,
        fontWeight:'300',
        borderRadius:10,
    },
    Target:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    CardTarget:{
        backgroundColor:'white',
        width:'46%',
        flexDirection:'row',
        padding:12,
        borderRadius:15
    },
    title1:{
        fontSize:17,
        fontWeight:'bold',
        color:'#9DCEFF'
    },
    img:{
        margin:7
    },
    img1:{
        margin:7,
        marginTop:12
    },
    input:{
        height:30,
        backgroundColor:"#E7E9EB",
        borderRadius:20,
        paddingHorizontal:5,
        fontSize:12,
        color:"white",
        marginVertical:5,
        paddingHorizontal:20
    },
    headerModal:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    
});
