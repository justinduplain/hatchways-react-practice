import React, { useState, useEffect, useMemo } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [postsPerPage, setPostsPerPage] = useState(PAGE_SIZES[0]);
  const [currentPaginationData, setCurrentPaginationData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginationData = (currentPage, postsPerPage) => {
    const postNumber = (currentPage - 1) * postsPerPage;
    const endNumber = postNumber + postsPerPage;
    return blogs.posts.slice(postNumber, endNumber);
  };

  const memoizedPaginationData = useMemo(
    () => getPaginationData(currentPage, postsPerPage),
    [currentPage, postsPerPage]
  );

  useEffect(() => {
    setCurrentPaginationData(memoizedPaginationData);
  }, [postsPerPage, currentPage]);

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
        totalCount={blogs.posts.length}
        pageSize={postsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
