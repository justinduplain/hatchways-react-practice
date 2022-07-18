import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import "../css/pagination.scss";
import usePagination, { DOTS } from "../hooks/usePagination";

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
}) {
  const memoizedPagination = useMemo(
    () => usePagination({ currentPage, totalCount, pageSize }),
    [currentPage, pageSize]
  );

  const [paginationRange, setPaginationRange] = useState(memoizedPagination);

  useEffect(() => {
    setPaginationRange(memoizedPagination);
  }, [currentPage, pageSize]);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className="wrapper"
      // Do not remove the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={pageNumber === currentPage ? "page" : false}
          >
            <button
              type="button"
              // Do not remove the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={currentPage === paginationRange[paginationRange.length - 1]}
        >
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(parseInt(e.target.value));
          onPageChange(1);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 1,
  pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {},
  onPageSizeOptionChange: () => {},
};

export default Pagination;
