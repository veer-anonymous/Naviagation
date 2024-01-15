import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const DrawerScreen2 = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50}}>Main Home Page Ok bro</Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 55,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('stackscreen3');
          }}>
          <Image
            source={require('../images/tractori.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> New Tractor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('stackscreen5');
          }}>
          <Image
            source={require('../images/tractorv.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text>Used Tractor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            {
              // height: Dimensions.get('window').height,
              // backgroundColor: 'green',
            }
          }
          onPress={() => {
            navigation.navigate('stackscreen4');
          }}>
          <Image
            source={require('../images/group.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> Community</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('stackscreen6');
          }}>
          <Image
            source={require('../images/personal.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> Loan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DrawerScreen2;
