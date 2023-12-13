import { Button } from "@tremor/react";
import React from "react";

type PaginationProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  defaultPageSize?: number;
  length: number;
};

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  defaultPageSize,
  currentPage,
  length,
}) => {
  if (!defaultPageSize) return null;

  const totalPages = Math.ceil(length / defaultPageSize);
  const startItem = (currentPage - 1) * defaultPageSize + 1;
  const endItem = Math.min(currentPage * defaultPageSize, length);

  return (
    <div className="flex items-center justify-between">
      <div>
        Showing {startItem} – {endItem} of {length}
      </div>
      <div className="flex gap-5">
        <Button
          color="neutral"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &larr; Prev
        </Button>
        <Button
          color="neutral"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
