import { IFilters } from "@/shared/interfaces";
import styles from "./NewsFilters.module.css";
import { useAppDispatch } from "@/app/appStore";
import Slider from "@/features/slider/ui/Slider/Slider";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { CategoriesType } from "@/entities/category";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

function NewsFilters({ filters, categories }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
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
