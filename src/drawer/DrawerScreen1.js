import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../bottom/Tab1';
import Tab2 from '../bottom/Tab2';
import Tab3 from '../bottom/Tab3';
import Tab4 from '../bottom/Tab4';
import Tab5 from '../bottom/Tab5';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated'

const Bottom = createBottomTabNavigator();
const DrawerScreen1 = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle: {height: 60}}}>
     <Bottom.Screen
        name="Home"
        component={Tab5}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                source={require('../images/home.png')}
                style={{width: size, height: size, tintColor: color, marginTop: 7,}}
              />
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return <Text style={{fontSize: 11, marginBottom: 7}}>Home</Text>;
          },
        }}
      />
      <Bottom.Screen
        name="New Tractor"
        component={Tab1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                source={require('../images/tractoriv.png')}
                style={{width: size, height: size, tintColor: color, marginTop: 7,}}
              />
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return <Text style={{fontSize: 11, marginBottom: 7}}>New Tractor</Text>;
          },
        }}
      />
      <Bottom.Screen
        name="Used Tractor"
        component={Tab2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                source={require('../images/tractori.png')}
                style={{width: size, height: size, tintColor: color, marginTop: 7,}}
              />
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return <Text style={{fontSize: 11, marginBottom: 7}}>Used Tractor</Text>;
          },
        }}
      />
      <Bottom.Screen
        name="Community"
        component={Tab3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                source={require('../images/newspaper.png')}
                style={{width: size, height: size, tintColor: color, marginTop: 7,}}
              />
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return <Text style={{fontSize: 11, marginBottom: 7}}>News</Text>;
          },
        }}
      />
      <Bottom.Screen
        name="Loan"
        component={Tab4}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                source={require('../images/profile-user.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  marginTop: 7,
                }}
              />
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return <Text style={{fontSize: 11, marginBottom: 7}}>Profile</Text>;
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default DrawerScreen1;
