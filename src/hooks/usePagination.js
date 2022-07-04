export const DOTS = "...";

/**
 * Function: Returns pagination data based on currently selected details
 * Uses a set to avoid duplicates, then performas a map on the set to insert ellipses (DOTS)
 * where necessary.
 */
function usePagination({ currentPage, pageSize, totalCount }) {
  //calculates the last page number
  const lastPage = Math.ceil(totalCount / pageSize);
  //
  const pageSet = new Set([1]);

  if (lastPage <= 4) {
    // if 4 pages or less, add all of them
    for (let i = 1; i <= lastPage; i++) {
      pageSet.add(i);
    }
    //returns the set spread to an array
    return [...pageSet];
  }
  // if 5 or more pages, this builds the set based on current page
  if (currentPage === 1) {
    //adds two right siblings
    pageSet.add(2);
    pageSet.add(3);
  } else if (currentPage === lastPage) {
    //adds the two left siblings
    pageSet.add(currentPage - 1);
    pageSet.add(currentPage - 2);
  } else {
    //adds left sibling, current page, and right sibling
    pageSet.add(currentPage - 1);
    pageSet.add(currentPage);
    pageSet.add(currentPage + 1);
  }
  //adds the last page to the set
  pageSet.add(lastPage);
  // transforms the set to an array and inserts ellipses
  return [...pageSet];
}

export default usePagination;
