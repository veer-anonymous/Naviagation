import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen4 from '../drawer/DrawerScreen4'


const Drawer=createDrawerNavigator()
const StackScreen6 = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='drawer' component={DrawerScreen4}/>
   </Drawer.Navigator>
  )
}

export default StackScreen6