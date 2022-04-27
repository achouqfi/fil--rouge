import React, {useEffect,useState, useRef} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"
import { BottomSheet, Button, ListItem } from 'react-native-elements';

export default function Header({back, HeaderTitle}) {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
      { title:'Disabled notifications'},
      { title:'See your activity'},
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: '#92A3FD' },
        titleStyle: { color: 'white', fontWeight:'bold' },
        onPress: () => setIsVisible(false),
      },
    ];
  
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={back}
                style={styles.btnBack}
            >
                <Svg width="20" height="18" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M5.33325 10.6666L0.666585 5.99992L5.33325 1.33325" stroke="#1D1617" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </TouchableOpacity>
            <Text style={styles.textNotif}>{HeaderTitle}</Text>
            <Button
                title={
                    <Svg width="10" height="10" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="2" cy="2" r="2" fill="#1D1617"/>
                        <Circle cx="8" cy="2" r="2" fill="#1D1617"/>
                    </Svg>
                }
                onPress={() => setIsVisible(true)}
                buttonStyle={styles.Option}
            ></Button>
            
            <BottomSheet  isVisible={isVisible}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        marginHorizontal:18
    },
    btnBack:{
        height:32,
        width:32,
        backgroundColor:"#F7F8F8",
        borderRadius:10,
        padding:6
    },
    textNotif:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:3
    },
    Option:{
        height:32,
        width:32,
        backgroundColor:"#F7F8F8",
        borderRadius:10,
        padding:8,
        color:'black'
    },
});
