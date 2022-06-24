import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screens/Onbarding/Onboarding";
import CreateAccount from "../screens/Auth/AccountCreation";
import LoginIn from "../screens/Auth/LoginIn";
import CreateAccount1 from "../screens/Auth/AccountCreation1";
import StartedHome from "../screens/Auth/StartedHome";
import Notification from "../screens/Dashboard/Notification/Notification";
import Buttomnavigation from "../navigation/ButtomNavigation";
import HomeMealPlanner from "../screens/Dashboard/MealPlanner/HomeMealPlanner";
import Calendar from "../components/Dashboard/Profile/Calendar/Index";
import ActivityHistoty from "../components/Dashboard/Profile/ActivityHistoty/Index";
import Confidentiality from "../components/Dashboard/Profile/Confidentiality/Index";
import ContactUs from "../components/Dashboard/Profile/ContactUs/Index";
import PersonnalData from "../components/Dashboard/Profile/PersonnalData/Index";
// import PrivacyPolicy from "../components/Dashboard/Profile/PrivacyPolicy/index";
import Settings from "../components/Dashboard/Profile/Settings/Index";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Dashboard"
          component={Buttomnavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        /> 

        <Stack.Screen
          name="LoginIn"
          component={LoginIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonnalData"
          component={PersonnalData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartedHome"
          component={StartedHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />


        {/* <Stack.Screen
          name="CreateAccount1"
          component={CreateAccount1}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="MealPlanner"
          component={HomeMealPlanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActivityHistoty"
          component={ActivityHistoty}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confidentiality"
          component={Confidentiality}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
