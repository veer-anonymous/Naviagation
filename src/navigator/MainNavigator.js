import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen1 from '../stack/StackScreen1';
import StackScreen2 from '../stack/StackScreen2';
import Header from '../header/Header';
import StackScreen3 from '../stack/StackScreen3';
import StackScreen4 from '../stack/StackScreen4';
import StackScreen5 from '../stack/StackScreen5';
import StackScreen6 from '../stack/StackScreen6';
import StacScreen7 from '../stack/StacScreen7';
import StackScreen8 from '../stack/StackScreen8';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Header/> */}
      <Stack.Navigator>
        <Stack.Screen
          name="stackscreen2"
          component={StackScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="stackscreen1"
          component={StackScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen name="stackscreen3" component={StackScreen3}  options={{headerShown: false}} />
        <Stack.Screen name="stackscreen4" component={StackScreen4}  options={{headerShown: false}} />
        <Stack.Screen name='stackscreen5' component={StackScreen5}  options={{headerShown: false}}/>
        <Stack.Screen name='stackscreen6' component={StackScreen6}  options={{headerShown: false}}/>
        <Stack.Screen name='stackscreen7' component={StacScreen7}  options={{headerShown: false}}/>
        <Stack.Screen name='stackscreen8' component={StackScreen8}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
