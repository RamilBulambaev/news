import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./Skeleton.module.css";
function Skeleton({ count = 1, type = "banner", direction = "column" }) {
    return (_jsx(_Fragment, { children: count > 1 ? (_jsx("ul", { className: direction === "column" ? styles.columnList : styles.rowList, children: [...Array(count)].map((_, index) => (_jsx("li", { className: type === "banner" ? styles.banner : styles.item }, index))) })) : (_jsx("li", { className: type === "banner" ? styles.banner : styles.item })) }));
}
export default Skeleton;
