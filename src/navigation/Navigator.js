import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeListScreen from '../screens/EmployeeListScreen';
import EmployeeDetailsScreen from '../screens/EmployeeDetailsScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Employee List">
      <Stack.Screen name="Employee List" component={EmployeeListScreen} />
      <Stack.Screen name="Employee Details" component={EmployeeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
