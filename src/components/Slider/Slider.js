import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import styles from "./Slider.module.css";
function Slider({ children, step = 150 }) {
    const sliderRef = useRef(null);
    const scrollLeft = () => {
        if (!sliderRef.current)
            return;
        sliderRef.current.scrollLeft -= step;
    };
    const scrollRight = () => {
        if (!sliderRef.current)
            return;
        sliderRef.current.scrollLeft += step;
    };
    return (_jsxs("div", { className: styles.slider, children: [_jsx("button", { onClick: scrollLeft, className: styles.arrow, children: "<" }), React.cloneElement(children, { ref: sliderRef }), _jsx("button", { onClick: scrollRight, className: styles.arrow, children: ">" })] }));
}
export default Slider;
