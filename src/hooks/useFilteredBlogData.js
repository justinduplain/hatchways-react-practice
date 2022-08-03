import blogs from "../data/blogs.json";

/**
 * A hook that returns filtered data based on the selected tags.
 * Returns all blogs if no tags are selected.
 */

function useFilteredBlogData({
  // currentPage = 1,
  // postsPerPage = 15,
  tags = [],
}) {
  // const postNumber = (currentPage - 1) * postsPerPage;
  // const endNumber = postNumber + postsPerPage;
  if (tags && tags.length === 0) {
    return blogs.posts;
  } else return blogs.posts.filter((post) => tags.includes(post.tags));
}

export default useFilteredBlogData;
