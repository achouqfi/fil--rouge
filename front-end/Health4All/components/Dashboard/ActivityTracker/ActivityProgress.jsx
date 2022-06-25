import React, {useEffect, useRef, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image,
    FlatList
} from 'react-native';
import { Input, Button, Box, Center, NativeBaseProvider , Heading, Avatar, HStack, VStack, Spacer } from "native-base";


import axios from 'axios'
import FoodItem from "./DataFoodItem";

export default function ActivityProgress() {
    const [Food, setFood] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [data, setData] = React.useState('');
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
      
        axios.request(options)
            .then(function (response) {
                console.log(response.data.items);
                if (response.data.items.length >= 1) {
                    console.log("3amar");
                    setData(response.data.items)
                }else{
                    console.log('jjjffr');
                    setData('empty')
                }
                console.log("data", data);
            }).catch(function (error) {
                console.error(error);
            });
    }

    console.log(data);
    return (
        <NativeBaseProvider style={styles.container}> 
            <Box alignItems="center">
                <Input 
                    type="text" 
                    w="85%" 
                    maxW="500px" 
                    py="0" 
                    value={Food}
                    onChangeText={newText => setFood(newText)}
                    InputRightElement={
                    <Button size="xs"
                    onPress={()=>search()}
                    rounded="none" w="2/6" h="full" >
                     <Text 
                        style={{
                            color:'white',
                        }}
                     >Search</Text> 
                </Button>} placeholder="Food" />
            </Box>
            {
                data == 'empty' ? (
                    <Text style= {{ marginHorizontal:14, textAlign:'center', color:'red', marginTop: 10 }}>Food name incorect</Text>
                ): data !== 'empty' && data.length >= 1?(
                    <FoodItem data={data} />
                ):null
            }
        </NativeBaseProvider>
    )
}

//                        

const styles = StyleSheet.create({
    container: {
    },
    search:{
        backgroundColor:'#9DCEFF',
        color:'white'
    }
});
