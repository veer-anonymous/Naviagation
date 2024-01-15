import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StackScreen1 from './StackScreen1'
import StackScreen2 from './StackScreen2'

const Stack=createStackNavigator()
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='stackscreen1' component={StackScreen1} options={{headerShown:false}}/>
        <Stack.Screen name='stackscreen2' component={StackScreen2} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default StackNavigation