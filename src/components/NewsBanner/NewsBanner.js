import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./NewsBanner.module.css";
function NewsBanner({ item }) {
    return (_jsxs("div", { className: styles.banner, children: [_jsx(Image, { image: item.image }), _jsx("h3", { className: styles.title, children: item.title }), _jsxs("p", { className: styles.extra, children: [formatTimeAgo(item.published), " by ", item.author] })] }));
}
export default NewsBanner;
