import {createSlice} from "@reduxjs/toolkit";
import {userLikesSongThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesSongThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        }
    }
})