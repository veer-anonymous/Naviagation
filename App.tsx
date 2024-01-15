import { View, Text } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigator/MainNavigator'
import Header from './src/header/Header'
import MainNavigator2 from './src/one/navigator/MainNavigator2'
import StackNavigation from './src/one/stack/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './src/one/bottom/BottomNavigation'


const App = () => {
  return (
   <>
   {/* <Header/> */}
   <MainNavigator/>
   {/* <MainNavigator2/> */}


   </>
  )
}

export default App