import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading)
    return (
      <div>
        <Appbar />
        <div className="font-extrabold text-3xl flex justify-center items-center h-screen">
          loading...
        </div>
      </div>
    );

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center h-screen mt-10">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            content={blog.content}
            authorName={blog.author.name || "Anonymous"}
            publishedAt="Dec 3, 2023"
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
};
