import blogs from "../data/blogs.json";

/**
 * A hook that returns filtered data based on the selected tags.
 * If no tags are selected, returns all blog posts.
 */

function useFilteredBlogData({ tags = [] }) {
  console.log("tags: ", tags);
  if (tags && tags.length === 0) {
    return blogs.posts;
  } else
    return blogs.posts.filter((post) => {
      return post.tags.some((tag) => tags.includes(tag));
    });
}

export default useFilteredBlogData;
