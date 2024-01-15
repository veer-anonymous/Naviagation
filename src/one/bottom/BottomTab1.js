import { View, Text,Image } from 'react-native'
import React from 'react'
import Header from '../../header/Header'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerScreen1 from '../drawer/DrawerScreen1'
import DrawerScreen2 from '../drawer/DrawerScreen2'
// import { Image } from 'react-native-reanimated/lib/typescript/Animated'
// import { Header } from '@react-navigation/stack'

const Drawer=createDrawerNavigator()
const BottomTab1 = () => {
  return (
//    <Drawer.Navigator>
//    <Drawer.Screen name='drawer1' component={DrawerScreen1}/>
//    <Drawer.Screen name='drawer2' component={DrawerScreen2}/>

//    </Drawer.Navigator>

   <View>
    <Image source={require('../../images/tractori.png')}  style={{width:10,height:10}}/>
    <Text>
        hu
    </Text>
   </View>
  )
}

export default BottomTab1