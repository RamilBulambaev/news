import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./NewsList.module.css";
import { INews, NewsItem } from "@/entities/news";

interface Props {
  news?: INews[];
}

function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
