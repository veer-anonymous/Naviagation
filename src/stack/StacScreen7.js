import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen6 from '../drawer/DrawerScreen6'


const Drawer=createDrawerNavigator()
const StacScreen7 = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='drawer' component={DrawerScreen6}/>
   </Drawer.Navigator>
  )
}

export default StacScreen7