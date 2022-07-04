export const DOTS = "...";

/**
 * Returns pagination data based on currently selected details
 */
function usePagination({ currentPage, pageSize, totalCount }) {
  const max = Math.ceil(totalCount / pageSize);
  const pages = [];

  if (max <= 4) {
    for (let i = 1; i <= max; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    pages.push(DOTS);
    pages.push(currentPage - 1);
    pages.push(currentPage);
    pages.push(currentPage + 1);
    pages.push(DOTS);
    pages.push(max);
  }
  console.log(pages);
  return pages;
}

export default usePagination;
