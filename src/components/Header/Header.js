import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";
function Header() {
    const { isDark, toggleTheme } = useTheme();
    return (_jsxs("header", { className: `${styles.header} ${isDark ? styles.dark : styles.light}`, children: [_jsxs("div", { className: styles.info, children: [_jsx("h1", { className: styles.title, children: "NEWS REACTIFY" }), _jsx("p", { className: styles.date, children: formatDate(new Date()) })] }), _jsx("img", { src: isDark ? themeIcons.light : themeIcons.dark, width: 30, onClick: toggleTheme, alt: "icon" })] }));
}
export default Header;
