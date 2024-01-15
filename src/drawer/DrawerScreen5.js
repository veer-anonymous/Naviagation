import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DrawerScreen5 = () => {
    // const navigation=useNavigation()
    const navigation=useNavigation()
    return (
        <>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:50}}> This is Nesting Home Page </Text>
        </View>
       
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding:5
        }}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("stackscreen2")
        }}>
          <Image
            source={require('../images/home.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> New Tractor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate("stackscreen3")
        }}>
          <Image
            source={require('../images/tractori.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> New Tractor</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{
          navigation.navigate("stackscreen5")
        }}>
          <Image
            source={require('../images/tractorv.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text>Used Tractor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // height: Dimensions.get('window').height,
            // backgroundColor: 'green',
          
          }} onPress={()=>{
            navigation.navigate("stackscreen7")
          }}>
          <Image
            source={require('../images/newspaper.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text>News</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("stackscreen8")
        }}>
          <Image
            source={require('../images/profile-user.png')}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <Text> Profile</Text>
        </TouchableOpacity>
      </View>

      </>
    );
  };

export default DrawerScreen5