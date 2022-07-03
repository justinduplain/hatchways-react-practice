export const DOTS = "...";

/**
 * Returns pagination data based on currently selected details
 */
function usePagination({ currentPage, pageSize, totalCount }) {
  console.log(currentPage, pageSize, totalCount);
  const max = Math.ceil(totalCount / pageSize);

  return [1, 2, 3, 4, 5, 6, DOTS, max];
}

export default usePagination;
