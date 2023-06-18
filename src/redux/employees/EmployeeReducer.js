import { createSlice } from "@reduxjs/toolkit";


const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

// const initialState = {
//   employees_records: [defaultEmployee],
// };

const employeeSlice = createSlice({
  name: "employee",
  initialState: defaultEmployee,
  reducers:{
    addEmployee: (state, action)=>{
      state.push(action.payload)
  },
  saveNewEmployee: (state, action) =>{
    
  }
  }
 
});

export const { addEmployee, saveNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
