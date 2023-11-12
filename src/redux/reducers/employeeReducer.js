const initialState = [];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES_SUCCESS':
      return action.payload;
    case 'FETCH_EMPLOYEES_ERROR':
      console.error('Error fetching employees:', action.payload);
      return state;
    // Add more cases for other actions as needed
    default:
      return state;
  }
};

export default employeeReducer;
