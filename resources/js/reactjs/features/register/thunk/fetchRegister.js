import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";
const RegisterRepository = RepositoryFactory.exec("register");

export const fetchRegister = createAsyncThunk(
    "register/fetchRegister",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await RegisterRepository.register(credentials);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
