export const DOTS = "..."; //ellipsis

/**
 * A custom hook that returns correctly formatted pagination data based on
 * selected options. This hook is used by the Pagination component.
 */

function usePagination({ currentPage, pageSize, totalCount }) {
  const lastPage = Math.ceil(totalCount / pageSize);
  let pageArray = [];

  if (lastPage <= 4) {
    //adds all page numbers & no ellipsis
    for (let i = 1; i <= lastPage; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }

  if (currentPage === 1 || currentPage === 2) {
    pageArray = [1, 2, 3, DOTS, lastPage];
  } else if (currentPage === lastPage - 1 || currentPage === lastPage) {
    pageArray = [1, DOTS, lastPage - 2, lastPage - 1, lastPage];
  } else {
    pageArray = [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      lastPage,
    ];
  }

  return pageArray;
}

export default usePagination;
