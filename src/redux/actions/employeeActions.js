import generateEmployeeData from '../../utils/generateEmployeeData';

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      // Simulate fetching data from the API.successResponse
      // For simplicity, using the utility function to generate random employee data
      const employees = generateEmployeeData(5); // Adjust the number of employees as needed
      dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: employees });
    } catch (error) {
      dispatch({ type: 'FETCH_EMPLOYEES_ERROR', payload: error.message });
    }
  };
};
