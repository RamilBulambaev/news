import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Pagination from "../Pagination/Pagination";
function PaginationWrapper({ top, bottom, children, ...paginationProps }) {
    return (_jsxs(_Fragment, { children: [top && _jsx(Pagination, { ...paginationProps }), children, bottom && _jsx(Pagination, { ...paginationProps })] }));
}
export default PaginationWrapper;
