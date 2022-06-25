import React, {useEffect,useState, useRef} from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions ,
    ScrollView
} from 'react-native';

export default function FoodItem({data}) {
    console.log(data[0].calories);
    var width = Dimensions.get('window').width;

    return (
        <ScrollView style={[styles.container, {width}]} > 
                    
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>name : </Text>
                <Text style={styles.description}>{data[0].name}</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>calories : </Text>
                <Text style={styles.description}>{data[0].calories} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>carbohydrates : </Text>
                <Text style={styles.description}>{data[0].carbohydrates_total_g} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>fat saturated : </Text>
                <Text style={styles.description}>{data[0].fat_saturated_g} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>fat total : </Text>
                <Text style={styles.description}>{data[0].fat_total_g} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>fiber : </Text>
                <Text style={styles.description}>{data[0].fiber_g} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>potassium: </Text>
                <Text style={styles.description}>{data[0].potassium_mg} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>protein : </Text>
                <Text style={styles.description}>{data[0].protein_g} mg</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>serving size : </Text>
                <Text style={styles.description}>{data[0].serving_size_g} g</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>sodium : </Text>
                <Text style={styles.description}>{data[0].sodium_mg} mg</Text>
            </View>
            <View style={styles.NotifitemText}>
                <Text style={styles.title}>sugar : </Text>
                <Text style={styles.description}>{data[0].sugar_g} g</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    title:{
        color:'white',
        fontSize:13,
        fontWeight:'bold',
        width:"30%"
    },
    description:{
        fontSize:12,
        color:'white',
        fontWeight:'bold',
        width:"30%"
    },
    NotifitemText:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:'8%',
        width:'85%',
        marginTop: 10,
        backgroundColor: "#9DCEFF",
        height:30,
        borderRadius:10
    }
})