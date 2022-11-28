import {createSlice} from "@reduxjs/toolkit";
import {createSongsThunk, deleteSongThunk, findAllSongsThunk} from "./songs-thunks";

const initialState = {
    songs: [],
    loading: true
}

const songsReducer = createSlice({
    name: 'song',
    initialState: initialState,
    extraReducers: {
        [findAllSongsThunk.fulfilled]: (state, action) => {
            state.songs = action.payload
        },
        [createSongsThunk.fulfilled]: (state, action) => {
            state.songs.push(action.payload)
        },
        [deleteSongThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.songs = state.songs.filter(m => {
                return m._id !== action.payload
            })
        }
    }
})

export default songsReducer.reducer;