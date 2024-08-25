import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Main.module.css";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";
function Main() {
    return (_jsxs("main", { className: styles.main, children: [_jsx(LatestNews, {}), _jsx(NewsByFilters, {})] }));
}
export default Main;
