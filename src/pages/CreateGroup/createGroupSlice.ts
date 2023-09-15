import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormDataUpdate {
  fieldName: string;
  value: string;
}

interface CreateGroupState {
  formData: { [key: string]: string };
  groups: Array<string>;
}

const initialState: CreateGroupState = {
  formData: {},
  groups: [],
};

const createGroupSlice = createSlice({
  name: 'createGroup',
  initialState,
  reducers: {
    createGroup(state, action: PayloadAction<string>) {
      state.groups.push(action.payload);
    },
    getInputValue(state, action: PayloadAction<FormDataUpdate>) {
      const { fieldName, value } = action.payload;
      state.formData[fieldName] = value;
    },
    clearFormData(state) {
      state.formData = { ...initialState.formData };
    },
  },
});

export const { createGroup, getInputValue, clearFormData } =
  createGroupSlice.actions;

export default createGroupSlice.reducer;
