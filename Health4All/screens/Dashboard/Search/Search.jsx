import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions ,
    StatusBar
} from 'react-native';
import { SpeedDial } from 'react-native-elements';
import HeaderSearch from '../../../components/Dashboard/Notification/Header'
import Svg, { Path,Ellipse } from "react-native-svg"
import Map from '../../../components/Dashboard/Search/Map'

export default function Search({navigation}) {
  const [open, setOpen] = useState(false);
  const [closeStart, setCloseStart] = useState(false);
  const [closeArrived, setCloseArrived] = useState(false);
  const [containerSearch, setContainerSearch] = useState(false);
  const [start, onChangeStart] = useState('');
  const [arrived, onChangeArrived] = useState('');
  

  function back(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <HeaderSearch back={back} HeaderTitle={'Search'}/>
        {(
          containerSearch == true ? (
          <>
              <View style={styles.SearchContainer}>
                <View style={styles.start} >
                  <Svg  style={styles.svg} width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Ellipse cx="8.80541" cy="8.80541" rx="7.49047" ry="7.49047" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M14.0151 14.4043L16.9518 17.3334" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                    <TextInput 
                      placeholder='start'
                      style={styles.inputSearch}
                      onChangeText={onChangeStart}
                      onChange={()=>setCloseStart(true)}
                      value={start}
                    />
                  {(
                    closeStart === true ? (
                      <Svg style={styles.svg} onPress={()=>onChangeStart('')} width="20" height="20" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1.39467 1.27047L9.56041 9.08667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M9.50427 1.25515L1.41047 9.07236" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>
                    ):null
                  )}
                </View>
                <View>
                <View  style={styles.start} >
                  <Svg style={styles.svg} width="18" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Ellipse cx="8.80541" cy="8.80541" rx="7.49047" ry="7.49047" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <Path d="M14.0151 14.4043L16.9518 17.3334" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                    <TextInput 
                      placeholder='arrived'
                      style={styles.inputSearch}
                      onChangeText={onChangeArrived}
                      onChange={()=>setCloseArrived(true)}
                      value={arrived}
                    />
                  {(
                    closeArrived === true ? (
                      <Svg onPress={()=>onChangeArrived('')} style={styles.svg} width="20" height="20" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1.39467 1.27047L9.56041 9.08667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M9.50427 1.25515L1.41047 9.07236" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>
                    ):null
                  )}
                </View>
                </View>
              </View>
          </>
          ):null
        )}

        <Map />
        
        <SpeedDial
          isOpen={open}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
        >
          <SpeedDial.Action
            icon={{ name: 'search', color: '#fff' }}
            title="Search"
            onPress={() =>( 
              setContainerSearch(true),
              setOpen(!open)
            )}
          />
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Add"
            onPress={() => setOpen(!open)}
          />
        </SpeedDial> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'white',
    flex:1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  start:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomWidth:0.5,
    borderColor:"black",
    height:60,
    padding:10
  },
  inputSearch:{
    backgroundColor:'white',
    height:40,
    paddingHorizontal:10,
    width:'80%',
    color:"black",
    borderRadius:5,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  
  },
  SearchContainer:{
    backgroundColor:'#B1D8FF',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomWidth:0.5,
    borderColor:"black",
    padding:10
  },
  svg:{
    padding:8,
    margin:10
  }
});
