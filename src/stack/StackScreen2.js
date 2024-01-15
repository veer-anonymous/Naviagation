import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen1 from '../drawer/DrawerScreen1';
import DrawerScreen2 from '../drawer/DrawerScreen2';
import CustomDrawer from '../drawer/CustomDrawer';

const Drawer = createDrawerNavigator();
const StackScreen2 = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
    
      <Drawer.Screen name="drawerscreen2" component={DrawerScreen2} />
      {/* <Drawer.Screen name='drawerscreen2' component={DrawerScreen2}/> */}
    </Drawer.Navigator>
  );
};

export default StackScreen2;
