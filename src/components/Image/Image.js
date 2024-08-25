import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Image.module.css";
function Image({ image }) {
    return (_jsx("div", { className: styles.wrapper, children: image ? _jsx("img", { src: image, alt: "news", className: styles.image }) : null }));
}
export default Image;
