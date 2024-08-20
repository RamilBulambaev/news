import { useEffect } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import styles from "./Main.module.css";
import { getNews } from "../api/apiNews";
import { useState } from "react";
import NewsList from "../components/NewsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoader(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoader ? (
        <NewsBanner item={news[5]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {!isLoader ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
}

export default Main;
