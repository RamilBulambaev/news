import { useAppSelector } from "@/app/appStore";
import styles from "./NewsPage.module.css";
import { Link } from "react-router-dom";
import { NewsDetails } from "@/entities/news";

function NewsPage() {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <h3>
          <Link to="/">Go to main page</Link>
        </h3>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <h2>
        {currentNews.title} <NewsDetails item={currentNews} />
      </h2>
    </main>
  );
}

export default NewsPage;
