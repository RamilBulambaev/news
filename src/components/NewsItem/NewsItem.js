import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./NewsItem.module.css";
function NewsItem({ item }) {
    return (_jsxs("li", { className: styles.item, children: [_jsx("div", { className: styles.wrapper, style: { backgroundImage: `url(${item.image})` } }), _jsxs("div", { className: styles.info, children: [_jsx("h3", { className: styles.title, children: item.title }), _jsxs("p", { className: styles.extra, children: [formatTimeAgo(item.published), " by ", item.author] })] })] }));
}
export default NewsItem;
