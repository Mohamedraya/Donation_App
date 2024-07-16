import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator();


export const NonAuthenticated = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.LoginScreen}>
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} />
    </Stack.Navigator>
  )
};

export const Authenticated = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.HomeScreen}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.DetailsScreen} component={DetailsScreen} />
      <Stack.Screen name={Routes.PaymentScreen} component={PaymentScreen}/>
    </Stack.Navigator>
  );
};

