import BannersList from "../BanersList/BanersList";
import styles from "./LatestNews.module.css";

function LatestNews({ banners, isLoading }) {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
