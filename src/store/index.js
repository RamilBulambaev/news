import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import newsReducer from "./slices/newsSlice";
import { newsApi } from "./services/newsApi";
export const store = configureStore({
    reducer: {
        news: newsReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
});
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
