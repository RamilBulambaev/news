import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TOTAL_PAGES } from "../../constans/constans";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./NewsByFilters.module.css";
function NewsByFilters() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.news.filters);
    const news = useAppSelector((state) => state.news.news);
    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    });
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({ key: "page_number", value: filters.page_number + 1 }));
        }
    };
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({ key: "page_number", value: filters.page_number - 1 }));
        }
    };
    const handlePageClick = (pageNumber) => {
        dispatch(setFilters({ key: "page_number", value: pageNumber }));
    };
    return (_jsxs("section", { className: styles.section, children: [_jsx(NewsFilters, { filters: filters }), _jsx(PaginationWrapper, { top: true, bottom: true, handleNextPage: handleNextPage, handlePageClick: handlePageClick, handlePreviousPage: handlePreviousPage, totalPages: TOTAL_PAGES, currentPage: filters.page_number, children: _jsx(NewsList, { isLoading: isLoading, news: news }) })] }));
}
export default NewsByFilters;
