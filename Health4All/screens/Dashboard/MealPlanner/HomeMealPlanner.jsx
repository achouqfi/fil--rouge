import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    TextInput,
    StatusBar
} from 'react-native';
import HeaderMealPlanner from '../../../components/Dashboard/Notification/Header'
import BtnHome from '../../../components/Dashboard/Home/BtnHome'
import axios from 'axios';

export default function HomeMealPlanner({navigation}) {
    const [nutritionValue, setNutritionValue] = useState('');
    const [data, Setdata] = useState('');
    function back(){
        navigation.goBack();
    }
    function MealPlanner(){
        navigation.goBack();
    }

    const updateSearch = (nutritionValue) => {
        setNutritionValue(nutritionValue);
    };
    
    let params = {
        api_key:'GBOYr6VSkg3Q2B28OhnngLv4mIElPT7lfmBHKS3y',
        query: nutritionValue,
        dataType:["Survey{FNDDS}"],
        pageSize:5
    }

    let api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(params.query)}=2&api_key=GBOYr6VSkg3Q2B28OhnngLv4mIElPT7lfmBHKS3y`

    function getData(){
        console.log(api_url);
        return axios(api_url)
            .then(res=>Setdata(res.data))
            .catch(err=>err.json())
    }
      return (
        <View style={styles.container}>
            <HeaderMealPlanner back={back} HeaderTitle={'Meal Planner'} />
            <View style={styles.todayTarget}>
                <Text style={styles.HomeTargerDay}>Daily Meal Schedule</Text>
                <View style={styles.btnHome}>
                    <BtnHome btnTitle={"Check"} color1={"#92A3FD"} color2={'#9DCEFF'} />
                </View>
            </View>
            <View>
                <TextInput        
                    placeholder='Choose Gender'
                    onChangeText={updateSearch}
                    value={nutritionValue}
                    style={{ 
                        width:'86%',
                        height:40,
                        backgroundColor:'#E7E9EB',
                        color:'black',
                        margin:30,
                        borderRadius:20,
                        paddingHorizontal:30,
                        paddingVertical:10
                     }}
                />
                <TouchableOpacity
                    onPress={getData}
                    style={{ 
                        backgroundColor:'yellow'
                     }}
                >
                    <Text>search</Text>
                </TouchableOpacity>
                {/* {data != null && (
                    // <Text>{data.object.additionalDescriptions}</Text>
                )} */}
            </View>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            marginTop:StatusBar.currentHeight,
            backgroundColor:'white',
            flex:1
        },
        todayTarget:{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'#DAEAFF',
            borderRadius:15,
            marginHorizontal:24,
            marginTop:44,
            height:57,
            padding:4
        },
        btnHome:{
            marginLeft:'20%'
        },
    });
    