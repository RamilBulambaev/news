import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from "../../components/Skeleton/Skeleton";
function withSkeleton(Component, type, count, direction) {
    return function WithSkeleton(props) {
        const { isLoading, ...restProps } = props;
        if (isLoading) {
            return _jsx(Skeleton, { type: type, count: count, direction: direction });
        }
        return _jsx(Component, { ...restProps });
    };
}
export default withSkeleton;
