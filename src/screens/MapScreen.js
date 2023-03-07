import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import MapNavigator from '../navigator/MapNavigator';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreen;
