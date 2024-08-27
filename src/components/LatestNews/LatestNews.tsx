import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import BannersList from "../BanersList/BanersList";
import styles from "./LatestNews.module.css";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
