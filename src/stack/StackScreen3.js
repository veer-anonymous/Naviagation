import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen4 from '../drawer/DrawerScreen4'


const Drawer=createDrawerNavigator()
const StackScreen3 = () => {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name='drawer4' component={DrawerScreen4}/> */}
        <Drawer.Screen name='drawer4' component={DrawerScreen4}/>
    </Drawer.Navigator>
  )
}

export default StackScreen3