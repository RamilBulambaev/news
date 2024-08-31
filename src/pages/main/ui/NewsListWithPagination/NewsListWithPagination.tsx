import { TOTAL_PAGES } from "@/shared/constans/constans";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

function NewsListWithPagination({ filters, news, isLoading }: Props) {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      handlePreviousPage={handlePreviousPage}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList isLoading={isLoading} news={news} />
    </Pagination>
  );
}

export default NewsListWithPagination;
