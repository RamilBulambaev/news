import { useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import styles from "./NewsByFilters.module.css";
import { NewsFilters } from "@/widgets/news";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

function NewsByFilters() {
  const { data } = useGetCategoriesQuery(null);

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        filters={filters}
        news={news}
      />
    </section>
  );
}

export default NewsByFilters;
