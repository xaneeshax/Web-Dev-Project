import {createAsyncThunk} from "@reduxjs/toolkit";
import {findSongBySearchTerm} from "./bopify-service";

export const findSongBySearchTermThunk = createAsyncThunk(
    'findSongBySearchTerm',
    (term) => findSongBySearchTerm(term)
)