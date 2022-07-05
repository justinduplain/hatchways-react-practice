export const DOTS = "..."; //ellipsis

/**
 * usePagination: Custom hook that returns pagination data based on
 * currently selected details:
 * - Uses a set to avoid duplicates
 * - Formats the set data to be used in the pagination component
 * - Adds ellipsis to gaps (ie. non-siblings from the set)
 * - returns an array of page numbers with appropriate ellispsis
 */

function usePagination({ currentPage, pageSize, totalCount }) {
  //calculates the last page number
  const lastPage = Math.ceil(totalCount / pageSize);
  // uses a set to avoid duplicates & errors
  const pageSet = new Set([1]);

  // handles cases where ellipsis are not needed
  if (lastPage <= 4) {
    // if 4 pages or less, add all of them
    for (let i = 1; i <= lastPage; i++) {
      pageSet.add(i);
    }
    //returns an array from the set without ellipsis
    return [...pageSet];
  }
  // if 5 or more pages, this builds the set based on current page
  if (currentPage === 1) {
    // if on the first page
    //adds two right siblings
    pageSet.add(2);
    pageSet.add(3);
  } else if (currentPage === lastPage) {
    // if on the last page
    //adds the two left siblings
    pageSet.add(currentPage - 2);
    pageSet.add(currentPage - 1);
  } else {
    // if on a middle page
    //adds left sibling, current page, right sibling
    pageSet.add(currentPage - 1);
    pageSet.add(currentPage);
    pageSet.add(currentPage + 1);
  }
  // adds the last page to the set
  pageSet.add(lastPage);

  // returns a reduced array spread from the set
  return (
    [...pageSet]
      // this reducer accumulates items from the set into an array,
      // inserting ellipsis between gaps
      .reduce(
        (pgsAccum, pgNum) => {
          // handles the first page, which already exists
          if (pgNum === 1) return pgsAccum;
          // adds the page if a sibling of previous page
          if (pgNum - pgsAccum[pgsAccum.length - 1] === 1) {
            pgsAccum.push(pgNum);
            return pgsAccum;
          } else {
            // if not a sibling, adds ellipsis
            pgsAccum.push(DOTS);
            pgsAccum.push(pgNum);
            return pgsAccum;
          }
        },
        [1]
      )
  );
}

export default usePagination;
