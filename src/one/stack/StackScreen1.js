import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen1 from '../drawer/DrawerScreen1'
import BottomNavigation from '../bottom/BottomNavigation'

const Drawer=createDrawerNavigator()
const StackScreen1 = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen name='drawer1' component={DrawerScreen1}/>
 
  </Drawer.Navigator>

  )
}

export default StackScreen1