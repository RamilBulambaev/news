import { useEffect } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import styles from "./Main.module.css";
import { getNews } from "../api/apiNews";
import { useState } from "react";
import NewsList from "../components/NewsList/NewsList";

function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log(response);

        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[5]} /> : null}
      <NewsList news={news} />
    </main>
  );
}

export default Main;
