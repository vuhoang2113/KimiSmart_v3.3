import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const profileRepository = RepositoryFactory.exec("profile");

export const putMe = createAsyncThunk(
    "profile/me/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await profileRepository.putMe(data);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
