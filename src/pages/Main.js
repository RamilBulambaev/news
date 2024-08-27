import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Main.module.css";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";
import { useTheme } from "../context/ThemeContext";
function Main() {
    const { isDark } = useTheme();
    return (_jsxs("main", { className: `${styles.main} ${isDark ? styles.dark : styles.light}`, children: [_jsx(LatestNews, {}), _jsx(NewsByFilters, {})] }));
}
export default Main;
