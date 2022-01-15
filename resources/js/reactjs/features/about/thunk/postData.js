import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const postData = createAsyncThunk(
    "about/create",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.postData(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
