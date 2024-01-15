import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header1 = () => {
    const navigation=useNavigation()
    return (
        <View
          style={{
            // backgroundColor: 'blue',
            height: '5%',
            flex: 0.0,
            height:55,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor:"#fff"
          }}>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
            //   backgroundColor: 'green',
              justifyContent: 'space-evenly',
              padding: 10,
            }}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("stackscreen2")
            }}>
    
            <Image
              source={require('../images/arrow.png')}
              style={{width: 25, height: 25}}
            />
            </TouchableOpacity>
            {/* <Image
              source={require('../images/tractorii.png')}
              style={{width: 25, height: 25}}
            /> */}
          </View>
    
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
            //   backgroundColor: 'pink',
              justifyContent: 'space-around',
              padding: 10,
            }}>
            <Image
              source={require('../images/search.png')}
              style={{width: 35, height: 35}}
            />
            {/* <View
              style={{
                width: 50,
                height: 30,
                borderRadius: 10,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                // padding:10
                
              }}>
              <Text style={{color: '#fff'}}>Sell</Text>
            </View> */}
          </View>
        </View>
      );
    };
    

export default Header1