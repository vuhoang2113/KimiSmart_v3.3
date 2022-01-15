import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const AuthRepository = RepositoryFactory.exec("auth");

export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.login(credentials);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
