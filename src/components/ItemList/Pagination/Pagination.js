import React from "react";
import {
  PaginationWrapper,
  ControlBox,
  PrevBtn,
  NextBtn,
  Pages,
} from "./Pagination.styled";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const arrowStyle = {
  color: "#1EA4CE",
  size: "30",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  nextPage,
  prevPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  let pageIncrementBtn = null;
  if(maxPageNumberLimit < 109) {
    pageIncrementBtn = <Pages onClick={nextPage}>...</Pages>
  }

  let pageDecrementBtn = null;
  if(minPageNumberLimit >= 1) {
    pageDecrementBtn = <Pages onClick={prevPage}>...</Pages>
  }

  return (
    <PaginationWrapper>
      <ControlBox>
        <PrevBtn disabled={currentPage < 2} onClick={prevPage}>
          <HiArrowLeft style={arrowStyle} />
          Prev
        </PrevBtn>
        {pageDecrementBtn}
        {pageNumbers.map(
          (number) =>
            number < maxPageNumberLimit + 1 &&
            number > minPageNumberLimit && (
              <Pages active={currentPage === number ? "active" : null}
                onClick={() => paginate(number)}
                key={number}
              >
                
                {number}
                
              </Pages>
            )
        )}
        {pageIncrementBtn}
        <NextBtn disabled={currentPage >= 109} onClick={nextPage}>
          <HiArrowRight style={arrowStyle} />
          Next
        </NextBtn>
      </ControlBox>
    </PaginationWrapper>
  );
};

export default Pagination;
