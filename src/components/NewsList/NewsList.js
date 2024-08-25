import { jsx as _jsx } from "react/jsx-runtime";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";
function NewsList({ news }) {
    return (_jsx("ul", { className: styles.list, children: news?.map((item) => {
            return _jsx(NewsItem, { item: item }, item.id);
        }) }));
}
const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);
export default NewsListWithSkeleton;
