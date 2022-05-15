import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  WebView
} from 'react-native-webview'

import html_script from '../../../script/map'
export default function Search() {

    return (
      <>
        <SafeAreaView style={styles.Container}>
          <WebView source={{html: html_script }} style={styles.Webview} />
        </SafeAreaView>
      </>
    );  
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    // padding: 10,
    backgroundColor: 'grey'
  
  },
  Webview: {
    flex: 2,
    
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Button: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

