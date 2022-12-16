import { createSlice } from "@reduxjs/toolkit";
import thoughts from './thoughts.json';

const currentUser = {
    "userName": "alice",
    "handle": "@alice",
};

const templateThought = {
    ...currentUser,
    "topic": "Excitement",
    "time": "2h",
}
   

const thoughtsSlice = createSlice({
 name: 'thoughts',
 initialState: thoughts,
 reducers: {
    createThought(state, action) {
      state.unshift({
        ...action.payload,
        ...templateThought,
        _id: (new Date()).getTime(),
      })
    }
  } 
});

export const {createThought} = thoughtsSlice.actions;
export default thoughtsSlice.reducer;