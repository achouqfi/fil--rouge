import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  FlatList,
  Text
} from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"

export default function Setting({item}) {
    
    return (
        <View>
          <View>
            <Text>{item.icon}</Text>
          </View>          
          <View>
            <Text>{item.title}</Text>
          </View>
        </View>
    );
}