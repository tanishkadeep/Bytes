import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading)
    return (
      <div className="font-extrabold text-3xl flex justify-center items-center h-screen">
        loading...
      </div>
    );

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center h-screen mt-16">
        <BlogCard
          title="How to Add Google Fonts to a Tailwind Project"
          content="To make use of our new Google font, we only need to specify the font-display class name Tailwind creates for us anywhere we need the font style in our code. If you’ve been using the tailwind-react starter, you can navigate to the App.jsx file in the src directory and then add the font-display class name to the <h1> element to test the font style."
          authorName="Tanishka Deep"
          publishedAt="Dec 3, 2023"
        />
        ;
        <BlogCard
          title="How to Add Google Fonts to a Tailwind Project"
          content="To make use of our new Google font, we only need to specify the font-display class name Tailwind creates for us anywhere we need the font style in our code. If you’ve been using the tailwind-react starter, you can navigate to the App.jsx file in the src directory and then add the font-display class name to the <h1> element to test the font style."
          authorName="Tanishka Deep"
          publishedAt="Dec 3, 2023"
        />
        <BlogCard
          title="How to Add Google Fonts to a Tailwind Project"
          content="To make use of our new Google font, we only need to specify the font-display class name Tailwind creates for us anywhere we need the font style in our code. If you’ve been using the tailwind-react starter, you can navigate to the App.jsx file in the src directory and then add the font-display class name to the <h1> element to test the font style."
          authorName="Tanishka Deep"
          publishedAt="Dec 3, 2023"
        />
      </div>
    </div>
  );
};
