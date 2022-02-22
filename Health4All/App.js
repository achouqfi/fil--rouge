import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {
    View ,
    Text
} from 'react-native';
import Onboarding from './screens/Onbarding/Onboarding'
import CreateAccount from './screens/Auth/AccountCreation'
import LoginIn from './screens/Auth/LoginIn'
import CreateAccount1 from './screens/Auth/AccountCreation1'
import StartedHome from './screens/Auth/StartedHome'
import Buttomnavigation from './navigation/ButtomNavigation';


const Stack = createStackNavigator()

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
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown :false }}  />
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown :false }}  />
          <Stack.Screen name="LoginIn" component={LoginIn} options={{ headerShown :false }}  />
          <Stack.Screen name="CreateAccount1" component={CreateAccount1} options={{ headerShown :false }}  />
          <Stack.Screen name="StartedHome" component={StartedHome} options={{ headerShown :false }}  />
          <Stack.Screen name="Dashboard" component={Buttomnavigation} options={{ headerShown :false }}  />
        </Stack.Navigator>
    </NavigationContainer>
  );
}