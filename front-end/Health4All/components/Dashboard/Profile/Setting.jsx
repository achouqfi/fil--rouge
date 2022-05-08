import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Setting({ item }) {  
  return (
    <View style={styles.container}>
      <View style={styles.icon} >
        <Text>{item.icon}</Text>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize:14 }}>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={ item.navigateTo } style={styles.NavigationTo}>{item.to}</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  title: {
    color: 'black',
    marginLeft: 10,
    width: '50%',
  },
  NavigationTo: {
    marginLeft: '34%',
  },
  icon:{
    width: '7%',
  }
});