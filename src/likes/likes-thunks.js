import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesSong} from "./likes-service";

export const userLikesSongThunk = createAsyncThunk(
    'userLikesSong',
    async (like) => {
        return await userLikesSong(like.uid, like.mid)
    }
)