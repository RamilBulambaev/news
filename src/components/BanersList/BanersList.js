import { jsx as _jsx } from "react/jsx-runtime";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import styles from "./BanersList.module.css";
function BanersList({ banners }) {
    return (_jsx("ul", { className: styles.banners, children: banners?.map((banner) => {
            return _jsx(NewsBanner, { item: banner }, banner.id);
        }) }));
}
const BannersListWithSkeleton = withSkeleton(BanersList, "banner", 5, "row");
export default BannersListWithSkeleton;
