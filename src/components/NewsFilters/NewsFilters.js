import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.css";
function NewsFilters({ filters }) {
    const { data } = useGetCategoriesQuery(null);
    const dispatch = useAppDispatch();
    return (_jsxs("div", { className: styles.filters, children: [data ? (_jsx(Slider, { children: _jsx(Categories, { categories: data.categories, setSelectedCategory: (category) => dispatch(setFilters({ key: "category", value: category })), selectedCategory: filters.category }) })) : null, _jsx(Search, { keywords: filters.keywords, setKeywords: (keywords) => dispatch(setFilters({ key: "category", value: keywords })) })] }));
}
export default NewsFilters;
