import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./BanersList.module.css";

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
