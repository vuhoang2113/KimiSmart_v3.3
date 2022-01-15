import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const deleteData = createAsyncThunk(
    "about/deleteItem",
    async (id, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.deleteItem(id);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
