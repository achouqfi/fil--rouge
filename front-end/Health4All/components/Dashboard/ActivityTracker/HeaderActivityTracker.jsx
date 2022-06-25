import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Image,
    Text
} from 'react-native';
import { Modal, Button, Input, Center, NativeBaseProvider } from "native-base";
import BtnAdd from '../../Auth/BtnAuth'
import axios from 'axios'

export default function HeaderActivityTracker() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [datacalculator, setDatacalculator] = useState({bmi:'', health:'', healthy_bmi_range:''})
    const [weight, setWeight] = useState();
    const [height , setHeight] = useState();
   
    const search = () => {
        const options = {
            method: 'GET',
            url: 'https://mega-fitness-calculator1.p.rapidapi.com/bmi', 
            params: {weight: weight, height: height},
            headers: {
              'X-RapidAPI-Key': '09bbb585c3msh37ff91f1744d1d9p1a1061jsnf03902caf60d',
              'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
            }
        };
        axios.request(options)
        .then( response =>{
            setDatacalculator(response.data.info);
            setModalVisible(!modalVisible);
        }).catch(function (error) {
            console.error(error);
        });
    }

  return (
    <View>
    <View style={styles.container}> 
        <View style={styles.headerTarget}>
            <Text style={styles.targerTitle}>Get Your BIM range</Text>
            <TouchableOpacity  onPress={() => {
                setModalVisible(!modalVisible);
            }}>
                <Text style={[ styles.targerTitle,styles.targerAdd ]} >+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Target}>
            <View style={styles.CardTarget}>
                <View>
                    <Text style={styles.title1}>bmi :     {datacalculator.bmi}</Text>
                </View>
            </View>
            <View style={styles.CardTarget}>
                <View>
                    <Text style={styles.title1}>health : {datacalculator.health}</Text>
                </View>
            </View>
            <View style={styles.CardTarget}>
                <View>
                    <Text style={styles.title1}>HBR : {datacalculator.healthy_bmi_range}</Text>
                </View>
            </View>
        </View>
    </View>
         <Modal isOpen={modalVisible} onClose={setModalVisible} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Search your BMI </Modal.Header>
          <Modal.Body>
            <Input mt={4} 
                value={height}
                onChangeText={newText => setHeight(newText)}
                placeholder="height" />
            <Input mt={4}
                 value={weight}
                 onChangeText={newText => setWeight(newText)}
                 placeholder="weight" />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button
                onPress={()=>search()}
              >Search</Button>
              <Button onPress={() => {
              setModalVisible(!modalVisible);
            }} colorScheme="secondary">
                Close
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      //height:130,
      borderRadius:28,
      marginVertical:15,
      marginHorizontal:20,
      backgroundColor:'#EAF0FF',
      padding:20,
    },
    headerTarget:{
        flexDirection:'row',
        justifyContent:'space-between',
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
        width:'30%',
        paddingVertical:4,
        borderRadius:10
    },
    title1:{
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'center'
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
