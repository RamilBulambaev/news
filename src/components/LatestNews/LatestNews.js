import { jsx as _jsx } from "react/jsx-runtime";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import BannersList from "../BanersList/BanersList";
import styles from "./LatestNews.module.css";
function LatestNews() {
    const { data, isLoading } = useGetLatestNewsQuery(null);
    return (_jsx("section", { className: styles.section, children: _jsx(BannersList, { banners: data && data.news, isLoading: isLoading }) }));
}
export default LatestNews;
