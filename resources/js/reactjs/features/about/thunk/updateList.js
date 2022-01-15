import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const updateList = createAsyncThunk(
    "about/updateList",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.updateList(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
