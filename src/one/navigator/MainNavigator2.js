import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Header from '../../header/Header'
import BottomNavigation from '../bottom/BottomNavigation'
import StackNavigation from '../stack/StackNavigation'

const MainNavigator2 = () => {
  return (
    <NavigationContainer>
        <Header/>
        {/* <StackNavigation/> */}


        <BottomNavigation/>
    </NavigationContainer>
  )
}

export default MainNavigator2