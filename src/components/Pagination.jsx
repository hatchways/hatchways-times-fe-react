import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { nanoid } from "nanoid";
import classnames from "classnames";
import "../css/pagination.scss";
import PropTypes from "prop-types";
import usePagination, { DOTS } from "../hooks/usePagination";

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className="wrapper">
      <li
        className={classnames("paginationItem", {
          disabled: false, // change this logic to add disabled class name
        })}
      >
        <button type="button" className="arrowButton left" onClick={onPrevious}>
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
            className={classnames("paginationItem", {
              selected: false, // change this logic to add selected class name
            })}
          >
            <button
              type="button"
              className="itemButton"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li
        className={classnames("paginationItem", {
          disabled: false, // change this logic to add disabled class name
        })}
      >
        <button type="button" className="arrowButton right" onClick={onNext}>
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
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
