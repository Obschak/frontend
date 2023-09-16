import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CreateGroupState {
  groups: Array<string>;
}

const initialState: CreateGroupState = {
  groups: [],
};

const createGroupSlice = createSlice({
  name: 'createGroup',
  initialState,
  reducers: {
    createGroup(state, action: PayloadAction<string>) {
      state.groups.push(action.payload);
    },
  },
});

export const { createGroup } = createGroupSlice.actions;

export default createGroupSlice.reducer;
