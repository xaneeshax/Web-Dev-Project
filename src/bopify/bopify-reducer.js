import {createSlice} from "@reduxjs/toolkit";
import {findSongBySearchTerm} from "./bopify-service";
import {findSongBySearchTermThunk} from "./bopify-thunks";

const initialState = {
    songs: [],
    loading: false
}

const bopifyReducer = createSlice({
    name: 'bopify',
    initialState,
    extraReducers: {
        [findSongBySearchTermThunk.fulfilled]: (state, action) => {
            state.songs = action.payload
        }
    }
})

export default bopifyReducer.reducer