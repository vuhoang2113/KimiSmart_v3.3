import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const putData = createAsyncThunk(
    "about/update",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.putData(payload.id, payload.data);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
