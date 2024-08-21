import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./BanersList.module.css";

function BanersList({ banners }) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton(BanersList, "banner", 10, "row");

export default BannersListWithSkeleton;
