import {View, Text, Image} from 'react-native';
import React from 'react';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated'

const CustomDrawer = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/profile-user.png')}
        style={{width: 50, height: 50, alignSelf: 'center', marginTop: 10}}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 4,
          fontWeight: '600',
        }}>
        VirendraMajhi
      </Text>
    </View>
  );
};

export default CustomDrawer;
