import { createSlice } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "../../constans/constans";
const initialState = {
    news: [],
    filters: {
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: "",
    },
};
export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload;
        },
        setFilters: (state, action) => {
            const { key, value } = action.payload;
            state.filters = { ...state.filters, [key]: value };
        },
    },
});
export const { setNews, setFilters } = newsSlice.actions;
export default newsSlice.reducer;
