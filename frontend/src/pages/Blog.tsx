import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <Appbar />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center ">
        <div className="w-1/2 mt-28 mb-20">
          <div className="font-extrabold text-5xl">{blog?.title}</div>
          <div className="mt-8">
            <div className="flex items-center text-gray-700 border-b-2 pb-5 border-gray-100">
              <div className="rounded-full bg-gray-400 text-white w-7 h-7 flex justify-center items-center text-sm mr-2">
                {blog?.author.name[0]}
              </div>
              <div className="">{blog?.author.name}</div>
              <div className="text-sm pl-2">
                &#x2022; {Math.ceil((blog?.content?.length || 0) / 700)} min
                read
              </div>
            </div>
          </div>
          <div className="mt-8 font-serif text-xl">{blog?.content}</div>
        </div>
      </div>
    </div>
  );
};
