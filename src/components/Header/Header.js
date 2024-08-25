import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatDate } from "../../helpers/formatDate";
import styles from "./Header.module.css";
function Header() {
    return (_jsxs("header", { className: styles.header, children: [_jsx("h1", { className: styles.title, children: "NEWS REACTIFY" }), _jsx("p", { className: styles.date, children: formatDate(new Date()) })] }));
}
export default Header;
