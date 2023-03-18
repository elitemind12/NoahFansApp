<script src="http://localhost:8097" />;
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Payment from './src/screens/payment';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Browse from './src/screens/Browse';
import Videos from './src/screens/Videos';
import Shop from './src/screens/Shop';
import Profile from './src/screens/Profile';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent('NoahFansApp', () => App);
