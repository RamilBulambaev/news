import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Search.module.css";
function Search({ keywords, setKeywords }) {
    const { isDark } = useTheme();
    return (_jsx("div", { className: `${styles.search} ${isDark ? styles.dark : styles.light}`, children: _jsx("input", { type: "text", value: keywords, onChange: (e) => setKeywords(e.target.value), className: styles.input, placeholder: "JavaScript" }) }));
}
export default Search;
