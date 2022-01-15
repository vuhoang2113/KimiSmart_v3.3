import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const profileRepository = RepositoryFactory.exec("profile");

export const uploadMyBackground = createAsyncThunk(
    "profile/background/update",
    async (fd, { rejectWithValue }) => {
        try {
            const res = await profileRepository.uploadBackground(fd);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
