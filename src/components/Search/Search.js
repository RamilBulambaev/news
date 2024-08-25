import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Search.module.css";
function Search({ keywords, setKeywords }) {
    return (_jsx("div", { className: styles.search, children: _jsx("input", { type: "text", value: keywords, onChange: (e) => setKeywords(e.target.value), className: styles.input, placeholder: "JavaScript" }) }));
}
export default Search;
