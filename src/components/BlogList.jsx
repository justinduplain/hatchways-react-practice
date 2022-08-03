import React, { useState, useEffect, useMemo } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import useFilteredBlogData from "../hooks/useFilteredBlogData";
//import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [postsPerPage, setPostsPerPage] = useState(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilters, setCurrentFilters] = useState([]);

  const memoizedBlogData = useMemo(
    () => useFilteredBlogData(currentFilters),
    []
  );

  // const getPaginationData = (currentPage, postsPerPage) => {
  //   const postNumber = (currentPage - 1) * postsPerPage;
  //   const endNumber = postNumber + postsPerPage;
  //   return blogs.posts.slice(postNumber, endNumber);
  // };

  const updateRowsPerPage = (rows) => {
    setPostsPerPage(rows);
  };

  const updatePage = (selected) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={memoizedBlogData.length}
        pageSize={postsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {memoizedBlogData.length
          ? memoizedBlogData.map((blog) => (
              <BlogPost
                key={blog.id}
                author={blog.author}
                title={blog.title}
                excerpt={blog.excerpt}
                featureImage={blog.image}
              />
            ))
          : null}
      </ul>
    </div>
  );
}

export default BlogList;
