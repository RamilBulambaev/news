import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Pagination.module.css";
function Pagination({ totalPages, handleNextPage, handlePageClick, handlePreviousPage, currentPage, }) {
    const { isDark } = useTheme();
    return (_jsxs("div", { className: `${styles.pagination} ${isDark ? styles.dark : styles.light}`, children: [_jsx("button", { onClick: handlePreviousPage, disabled: currentPage <= 1, className: styles.arrow, children: "<" }), _jsx("div", { className: styles.list, children: [...Array(totalPages)].map((_, index) => {
                    return (_jsx("button", { onClick: () => handlePageClick(index + 1), className: styles.pageNumber, disabled: index + 1 === currentPage, children: index + 1 }, index));
                }) }), _jsx("button", { onClick: handleNextPage, disabled: currentPage >= 10, className: styles.arrow, children: ">" })] }));
}
export default Pagination;
