import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import {MessageDetail} from '../../screens/MessageDetail';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detail"
        component={MessageDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
