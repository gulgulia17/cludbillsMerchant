import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Home from './screens/Home';
export default class App extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} hidden={true}/>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}
            options={{
              headerLeft: null,
              title: '',
              headerTitleStyle: {
                color: "#fff"
              },
              headerStyle: {
                height: 0
              }
            }}
          />
     
          <Stack.Screen name="Home" component={Home}
            options={{
              title: '',
              headerLeft: null,
              headerTitleStyle: {
                color: "#fff",
              },
              headerStyle: {
               height:0
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}