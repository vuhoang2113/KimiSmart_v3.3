import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const AuthRepository = RepositoryFactory.exec("auth");

export const postChangePassword = createAsyncThunk(
    "auth/change-password",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.changePasswords(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
