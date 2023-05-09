import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
