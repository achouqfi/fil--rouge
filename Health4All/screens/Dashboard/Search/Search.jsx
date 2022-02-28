import React, {useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    StatusBar
} from 'react-native';
import { SearchBar,  Tab, TabView  } from 'react-native-elements';
import HeaderSearch from '../../../components/Dashboard/Notification/Header'

export default function Search({navigation}) {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);

  function back(){
    navigation.goBack();
  }
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
        <HeaderSearch back={back} HeaderTitle={'Search'}/>
        <ScrollView style={styles.view}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            containerStyle={{padding:2}}
            inputStyle={{ backgroundColor:'white', fontSize:14, borderRadius:5, padding:7 }}
            inputContainerStyle={{ backgroundColor:'#9DCEFF', borderColor:'white' }}
          />
      </ScrollView>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 2,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="cart"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#FFFFFF',
    flex:0.3
  },
  view: {
    marginHorizontal: 22,
    borderRadius:20,

  },
});
