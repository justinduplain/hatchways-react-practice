import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // Declares a state variable for rows to display
  const [postsPerPage, setPostsPerPage] = useState(15);
  // Declare a state variable to hold displayed blog posts
  const [currentPaginationData, setCurrentPaginationData] = useState([]);
  // Declare a state variable to hold the current page information
  const [currentPage, setCurrentPage] = useState(1);

  // watch for changes to postsPerPage and update displayed post data as needed
  useEffect(() => {
    setCurrentPaginationData(blogs.posts.slice(0, postsPerPage));
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
