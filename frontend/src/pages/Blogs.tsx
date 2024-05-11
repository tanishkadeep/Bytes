import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { HomePageSkeleton } from "../components/HomePageSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  function getRandomDate(): string {
    const startDate: number = new Date("2020-01-01").getTime();
    const endDate: number = new Date("2024-04-04").getTime();

    const randomTimestamp: number =
      Math.floor(Math.random() * (endDate - startDate + 1)) + startDate;

    const date: Date = new Date(randomTimestamp);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate: string = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  if (loading)
    return (
      <div>
        <Appbar />
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/2 mt-24">
            <HomePageSkeleton />
            <HomePageSkeleton />
            <HomePageSkeleton />
            <HomePageSkeleton />
            <HomePageSkeleton />
          </div>
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
            publishedAt={getRandomDate()}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
};
