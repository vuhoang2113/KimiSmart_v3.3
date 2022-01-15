import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const AuthRepository = RepositoryFactory.exec("auth");

export const fetchLogout = createAsyncThunk(
    "auth/fetchLogout",
    async (_, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.logout();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
