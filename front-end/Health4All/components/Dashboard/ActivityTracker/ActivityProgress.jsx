import React, {useEffect, useRef, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native';
import { Input, Button, Box, Center, NativeBaseProvider } from "native-base";
import axios from 'axios'

export default function ActivityProgress() {
    const [Food, setFood] = React.useState('');
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const search = ()=>{
        const options = {
            method: 'GET',
            url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
            params: {query: Food},  
            headers: {
            'X-RapidAPI-Key': '09bbb585c3msh37ff91f1744d1d9p1a1061jsnf03902caf60d',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
            }
        };
      
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <NativeBaseProvider style={styles.container}> 
            <Box alignItems="center">
                <Input 
                    type="text" 
                    w="90%" 
                    maxW="500px" 
                    py="0" 
                    value={Food}
                    onChangeText={newText => setFood(newText)}
                    InputRightElement={
                    <Button size="m" 
                    onPress={()=>search()}
                    rounded="none" w="2/6" h="full" >
                    Search
                </Button>} placeholder="Food" />
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    search:{
        backgroundColor:'#9DCEFF',
        color:'white'
    }
});
