import { jsx as _jsx } from "react/jsx-runtime";
import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BanersList/BanersList";
import styles from "./LatestNews.module.css";
function LatestNews() {
    const { data, isLoading } = useFetch(getLatestNews);
    return (_jsx("section", { className: styles.section, children: _jsx(BannersList, { banners: data && data.news, isLoading: isLoading }) }));
}
export default LatestNews;
