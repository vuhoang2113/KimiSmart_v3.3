import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const fetchAll = createAsyncThunk(
    "about/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.fetchAll();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
