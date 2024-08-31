import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./BanersList.module.css";
import { INews, NewsBanner } from "@/entities/news";

interface Props {
  banners?: INews[] | null;
}

function BanersList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BanersList,
  "banner",
  5,
  "row"
);

export default BannersListWithSkeleton;
