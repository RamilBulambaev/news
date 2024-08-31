import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./LatestNews.module.css";
import { NewsList } from "@/widgets/news";
import { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigeteTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        direction="row"
        type="banner"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p
            onClick={() => {
              navigeteTo(news);
            }}
          >
            viev more...
          </p>
        )}
      />
    </section>
  );
}

export default LatestNews;
