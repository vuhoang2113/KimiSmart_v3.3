import { createSlice } from "@reduxjs/toolkit";

import { fetchAll } from "./thunk/fetchAll";
import { postData } from "./thunk/postData";
import { putData } from "./thunk/putData";
import { updateList } from "./thunk/updateList";
import { deleteData } from "./thunk/deleteData";

export { fetchAll } from "./thunk/fetchAll";
export { postData } from "./thunk/postData";
export { putData } from "./thunk/putData";
export { updateList } from "./thunk/updateList";
export { deleteData } from "./thunk/deleteData";

import { fetchAllReducer } from "./extraReducers/fetchAll";
import { postDataReducer } from "./extraReducers/postData";
import { putDataReducer } from "./extraReducers/putData";
import { updateListReducer } from "./extraReducers/updateList";
import { deleteDataReducer } from "./extraReducers/deleteData";

export const aboutSlice = createSlice({
    name: "about",
    initialState: {
        componentStatus: {},
        response: {
            success: null,
            status_code: null,
            message: null,
            data: null,
        },
    },
    reducers: {
        deleteError(state) {
            state.error.code = null;
            state.error.message = null;
        },
    },
    extraReducers(builder) {
        /* Fetch All */
        builder
            .addCase(fetchAll.pending, fetchAllReducer.pending)
            .addCase(fetchAll.fulfilled, fetchAllReducer.fulfilled)
            .addCase(fetchAll.rejected, fetchAllReducer.rejected);

        /* Create */
        builder
            .addCase(postData.pending, postDataReducer.pending)
            .addCase(postData.fulfilled, postDataReducer.fulfilled)
            .addCase(postData.rejected, postDataReducer.rejected);
        /* Update */
        builder
            .addCase(putData.pending, putDataReducer.pending)
            .addCase(putData.fulfilled, putDataReducer.fulfilled)
            .addCase(putData.rejected, putDataReducer.rejected);

        /* Update List */
        builder
            .addCase(updateList.pending, updateListReducer.pending)
            .addCase(updateList.fulfilled, updateListReducer.fulfilled)
            .addCase(updateList.rejected, updateListReducer.rejected);

        /* DeleteData */
        builder
            .addCase(deleteData.pending, deleteDataReducer.pending)
            .addCase(deleteData.fulfilled, deleteDataReducer.fulfilled)
            .addCase(deleteData.rejected, deleteDataReducer.rejected);
    },
});
/* Action */
export const aboutActions = aboutSlice.actions;

/* Selectors */
export const selectData = (state) => state.about?.response.data || null;
export const selectMessage = (state) => state.about?.response.message || null;

/* Reducer */
const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
