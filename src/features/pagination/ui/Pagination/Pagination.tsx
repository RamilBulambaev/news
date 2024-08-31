import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}

export default Pagination;
