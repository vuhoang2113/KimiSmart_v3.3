import { createSlice } from "@reduxjs/toolkit";

import { fetchRegister } from "./thunk/fetchRegister";
export { fetchRegister } from "./thunk/fetchRegister";
import { fetchRegisterReduce } from "./extraReducers/fetchRegister";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        componentStatus: {
            register: {
                processing: false,
                resolved: false,
            },
        },
        response: {
            success: null,
            status_code: null,
            message: null,
            data: null,
        },
    },
    reducers: {
        deleteMessage(state) {
            state.response.message = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchRegister.pending, fetchRegisterReduce.pending)
            .addCase(fetchRegister.fulfilled, fetchRegisterReduce.fulfilled)
            .addCase(fetchRegister.rejected, fetchRegisterReduce.rejected);
    },
});
/* Action */
export const registerActions = registerSlice.actions;

/* Selectors */
export const selectComponentStatusRegisterProcessing = (state) =>
    state.register?.componentStatus.register.processing;
export const selectComponentStatusRegisterResolved = (state) =>
    state.register?.componentStatus.register.resolved;
export const selectSuccess = (state) =>
    state.register?.response.success || null;
export const selectStatusCode = (state) =>
    state.register?.response.status_code || null;
export const selectMessage = (state) =>
    state.register?.response.message || null;
export const selectData = (state) => state.register?.response.data || null;

/* Reducer */
const registerReducer = registerSlice.reducer;
export default registerReducer;
