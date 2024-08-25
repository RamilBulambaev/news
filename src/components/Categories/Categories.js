import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import styles from "./Categories.module.css";
const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (_jsxs("div", { ref: ref, className: styles.categories, children: [_jsx("button", { onClick: () => setSelectedCategory(null), className: !selectedCategory ? styles.active : styles.item, children: "All" }), categories.map((category) => {
                return (_jsx("button", { onClick: () => setSelectedCategory(category), className: selectedCategory === category ? styles.active : styles.item, children: category }, category));
            })] }));
});
Categories.displayName = "Categories";
export default Categories;
