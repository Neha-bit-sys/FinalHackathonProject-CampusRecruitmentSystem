import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import student from '../screens/student';
import company from '../screens/company';
// import login from '../screens/login';
import Admin from '../screens/Admin';
import Login from '../screens/Login';
import Signup from '../screens/Signup'




const Stack = createStackNavigator();

function AppNavigation(){
  return (
      
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
                backgroundColor: "white",
          },
          headerTintColor: "navy"
      }}>
          
        <Stack.Screen  name="Home"  component={Home} />
        <Stack.Screen  name="student"  component={student} />
        <Stack.Screen  name="company"  component={company} />
        <Stack.Screen  name="Admin"  component={Admin} />
        <Stack.Screen  name="Login"  component={Login} />
        <Stack.Screen  name="Signup"  component={Signup} />




        {/* <Stack.Screen  name="login"  component={login} /> */}


        


      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

  
export default AppNavigation;
