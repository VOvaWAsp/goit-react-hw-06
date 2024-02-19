import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filters",
    initialState: "filter",
    reducers: {
        filterFiltration: (state, action) => {

        },
        prepare(text) {
            return {
                payload: {
            text,
        }
    }
        }
    }
});

export const { filterFiltration } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;