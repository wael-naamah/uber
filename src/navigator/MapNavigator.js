import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCar from '../components/RideOptionsCar';

const MapStack = createNativeStackNavigator();

const MapNavigator = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Group screenOptions={{headerShown: false}}>
        <MapStack.Screen name="NavigateCard" component={NavigateCard} />
        <MapStack.Screen name="RideOptionsCar" component={RideOptionsCar} />
      </MapStack.Group>
    </MapStack.Navigator>
  );
};

export default MapNavigator;
