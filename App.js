import React, {Component} from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login';
import DrawerNavigator from './navigation/DrawerNavigator';
import RegisterScreen from './screens/Register';

import firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      </Stack.Navigator>
    );
}
export default class App extends Component{
    render(){
return(
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
);
    }
}