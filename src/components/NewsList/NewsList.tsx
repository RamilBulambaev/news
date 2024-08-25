import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";

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
