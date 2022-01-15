import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const profileRepository = RepositoryFactory.exec("profile");

export const uploadMyAvatar = createAsyncThunk(
    "profile/avatar/update",
    async (fd, { rejectWithValue }) => {
        try {
            const res = await profileRepository.uploadAvatar(fd);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
