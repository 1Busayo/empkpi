import React from 'react';
import { View, Text } from 'react-native';

const EmployeeDetailsScreen = ({ route }) => {
  const { employee } = route.params;

  return (
    <View>
      <Text>Name: {employee.name}</Text>
      <Text>Level: {employee.level}</Text>
      <Text>Designation: {employee.designation}</Text>
      <Text>Salary: {employee.salary}</Text>
      <Text>Status: {employee.status}</Text>
      {/* Display other employee details as needed */}
    </View>
  );
};

export default EmployeeDetailsScreen;
