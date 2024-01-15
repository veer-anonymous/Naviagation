import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab1 from './BottomTab1';
import BottomTab2 from './BottomTab2';
import BottomTab3 from './BottomTab3';
import {useNavigation} from '@react-navigation/native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <Bottom.Navigator>
      {/* <Bottom.Screen
        name="Used Tractor"
        component={BottomTab1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <TouchableOpacity onPress={()=>{
                // navigation.navigate("stackscreen1")
              }}>
                <Image
                  source={require('../../images/tractori.png')}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                    marginTop: 7,
                  }}
                />
              </TouchableOpacity>
            );
          },
          tabBarLabel: ({color, size, focused}) => {
            return (
              <Text style={{fontSize: 11, marginBottom: 7}}>Used Tractor</Text>
            );
          },
        }}
      /> */}
      <Bottom.Screen name='tab1' component={BottomTab1} options={{headerShown:false}} />
      <Bottom.Screen
        name="tab2"
        component={BottomTab2}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="tab3"
        component={BottomTab3}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

{
  /* <Bottom.Screen
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
/> */
}
