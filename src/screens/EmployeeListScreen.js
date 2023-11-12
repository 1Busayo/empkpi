import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeActions';

const EmployeeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allEmployees = useSelector((state) => state.employees);
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployees);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    filterEmployees();
  }, [searchText, allEmployees]);

  const handleEmployeePress = (employee) => {
    navigation.navigate('Employee Details', { employee });
  };

  const renderEmployeeItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEmployeePress(item)} style={styles.employeeItem}>
      <Text style={styles.employeeName}>{item.name}</Text>
      <Text style={styles.smallText}>{item.designation}</Text>
      <Text style={styles.smallText}>{item.level}</Text>
      {/* Display other employee details as needed */}
    </TouchableOpacity>
  );

  const filterEmployees = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredData = allEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerCaseSearchText) ||
        employee.designation.toLowerCase().includes(lowerCaseSearchText) ||
        employee.level.toString().includes(lowerCaseSearchText)
    );
    setFilteredEmployees(filteredData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by name, designation, or level"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEmployeeItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  employeeItem: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmployeeListScreen;
