import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen7 from '../drawer/DrawerScreen7'


const Drawer=createDrawerNavigator()
const StackScreen8 = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='drawer' component={DrawerScreen7}/>
   </Drawer.Navigator>
  )
}

export default StackScreen8