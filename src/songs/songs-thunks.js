import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllSongs, createSong, deleteSong} from "./songs-service";

export const createSongsThunk = createAsyncThunk(
    'createSong',
    (newSong) => createSong(newSong)
)

export const findAllSongsThunk = createAsyncThunk(
    'findAllSongs',
    () => findAllSongs()
)

export const updateSongThunk = {}
export const deleteSongThunk = createAsyncThunk(
    'deleteSong',
    (mid) => deleteSong(mid)
)