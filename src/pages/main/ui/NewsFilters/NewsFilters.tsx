import { IFilters } from "@/shared/interfaces";
import styles from "./NewsFilters.module.css";
import { useAppDispatch } from "@/app/appStore";
import Slider from "@/features/slider/ui/Slider/Slider";
import { setFilters } from "@/entities/news/model/newsSlice";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";

interface Props {
  filters: IFilters;
}

function NewsFilters({ filters }: Props) {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "category", value: keywords }))
        }
      />
    </div>
  );
}

export default NewsFilters;
