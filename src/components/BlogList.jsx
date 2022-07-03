import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // number of blog posts to display per page
  const [postsPerPage, setPostsPerPage] = useState(PAGE_SIZES[0]);
  // currently displayed blog posts
  const [currentPaginationData, setCurrentPaginationData] = useState([]);
  // the current page displayed
  const [currentPage, setCurrentPage] = useState(1);
  // tracks the last page available
  const [maxPage, setMaxPage] = useState(1);

  // watch for changes to postsPerPage and update displayed post data as needed
  useEffect(() => {
    // sets the appropriate blog posts for the current page
    setCurrentPaginationData(blogs.posts.slice(0, postsPerPage));
    // sets the max page number based on selected page size (postsPerPage)
    setMaxPage(Math.ceil(blogs.posts.length / postsPerPage));
  }, [postsPerPage]);

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
        maxPage={maxPage}
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
