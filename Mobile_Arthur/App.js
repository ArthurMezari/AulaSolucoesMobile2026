
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';

import Pessoas from './Screens/Pessoas';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Image from './components/Image';
import Produtos from './Screens/Produtos_SQL';

import Exemplo1AsyncStorage from "./Screens/Exemplo1AsyncStorage";


function TabNavigate() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Image" component={Image}/>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Pessoas" component={Pessoas}/>
      <Tab.Screen name="Async" component={Exemplo1AsyncStorage}/>
    </Tab.Navigator>
  )
}

export default function App() {

    const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TabNavigate}/>
        <Stack.Screen name="Async" component={Exemplo1AsyncStorage}/>
        <Stack.Screen name="Produtos" component={Produtos}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}


