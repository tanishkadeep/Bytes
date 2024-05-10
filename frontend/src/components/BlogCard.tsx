interface inputs {
  title: string;
  content: string;
  authorName: string;
  publishedAt: string;
}

export const BlogCard = ({
  title,
  content,
  authorName,
  publishedAt,
}: inputs) => {
  return (
    <div className="w-1/2">
      <div className="flex items-center mb-2 mt-8">
        <div className="rounded-full bg-gray-400 text-white w-7 h-7 flex justify-center items-center text-sm mr-2">
          {authorName[0]}
        </div>
        <div className="font-semibold pr-2">{authorName} </div>
        <div className="text-gray-700">&#x2022; {publishedAt}</div>
      </div>
      <div className="font-extrabold text-3xl mb-3">{title}</div>
      <div className="font-medium font-serif pb-4">
        {content.length > 190 ? content.slice(0, 190) + "..." : content}
      </div>
      <div className="pb-8 border-b-2 border-gray-100">
        <div className="bg-gray-100 text-xs w-fit font-medium rounded-xl px-2 py-1">
          {Math.ceil(content.length / 150)} min read
        </div>
      </div>
    </div>
  );
};
