import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  section2Data: { data: [], isLoading: Boolean(true), isError: false },
};

export const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: { 
    setSection2Details: (state, action) => {
      state.section2Data = action.payload;
    },

  },
});

export const {
    setSection2Details
} = CommonReducer.actions;

export default CommonReducer.reducer;
