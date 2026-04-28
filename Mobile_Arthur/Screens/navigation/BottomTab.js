
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';


import Login from './Screens/Login';
import Home from './Screens/Home';



export default function BottomTab() {

  const Tab = createBottomTabNavigator();
  
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'orange',
        tabBarActiveTintColor: '#b3832aff',
        tabBarInactiveBackgroundColor: '#ff0000ff',
        tabBarInactiveTintColor: '#ffffffff',

        headerStyle: {
          backgroundColor: '#ad114dff'
        },

        headerTintColor: '#c5c5c5ff',
        headerTitleAlign: 'center',
        headerShown: false

      }}>
      
      
      


        <Tab.Screen name="Login" component={Login}
        options={{
          tabBarIcon: () => (
            <Entypo name="login" size={24} color="black" />
          )
        }}

        />
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={24} color="black" />
          )
        }}

        />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}