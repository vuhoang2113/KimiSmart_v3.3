import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const profileRepository = RepositoryFactory.exec("profile");

export const fetchUser = createAsyncThunk(
    "profile/user/fetch",
    async (uid, { rejectWithValue }) => {
        try {
            const res = await profileRepository.user(uid);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
