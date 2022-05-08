import Navigator from './navigation/Navigator'
import { View } from 'react-native'
import React from 'react'

export default function App() {
  // const [loaded] = useFonts({
  //   "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
  //   "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
  //   "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  //   "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  // })
  
  // if (!loaded) {
  //   return null;
  // }

  return (
    <Navigator />
  );
}