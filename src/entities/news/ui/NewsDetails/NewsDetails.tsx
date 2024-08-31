import styles from "./NewsDetails.module.css";
import { INews } from "../..";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
}

function NewsDetails({ item }: Props) {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return (
              <button className={styles.active} key={category}>
                {category}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewsDetails;
