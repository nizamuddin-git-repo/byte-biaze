import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../utils";
import BlogsCard from "../BlogsCard/BlogsCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-12 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogsCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></BlogsCard>
      ))}
    </div>
  );
};

export default Bookmarks;
