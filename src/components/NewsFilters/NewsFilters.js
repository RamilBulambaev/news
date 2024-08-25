import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./NewsFilters.module.css";
function NewsFilters({ filters, changeFilter }) {
    const { data: dataCategories } = useFetch(getCategories);
    return (_jsxs("div", { className: styles.filters, children: [dataCategories ? (_jsx(Slider, { children: _jsx(Categories, { categories: dataCategories.categories, setSelectedCategory: (category) => changeFilter("category", category), selectedCategory: filters.category }) })) : null, _jsx(Search, { keywords: filters.keywords, setKeywords: (keywords) => changeFilter("keywords", keywords) })] }));
}
export default NewsFilters;
