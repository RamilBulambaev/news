import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./Pagination.module.css";
import { IPaginationProps } from "../../model/types";

function PaginationButtons({
  totalPages,
  handleNextPage,
  handlePageClick,
  handlePreviousPage,
  currentPage,
}: IPaginationProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= 10}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationButtons;
