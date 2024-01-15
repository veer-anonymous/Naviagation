import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen5 from '../drawer/DrawerScreen5'

const Drawer=createDrawerNavigator()
const StackScreen4 = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name='drawer' component={DrawerScreen5}/>
  </Drawer.Navigator>
  )
}

export default StackScreen4