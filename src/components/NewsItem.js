import React from "react";
const NewsItem = ({ article }) => (
  <article className="h-full">
    <div className="w-full bg-white pb-8 h-full rounded-lg shadow relative">
      <h3 className="p-4 text-xl">{article.title}</h3>
      <img className="w-full" src={article.urlToImage} alt="" />
      <p className="text-base p-4 text-gray-600">{article.description}</p>
      <a
        className="px-4 pb-2 text-lg absolute bottom-0 left-0 text-indigo-800 hover:underline"
        href={article.url}
        target="_blank"
      >
        Read more
      </a>
    </div>
  </article>
);
export default NewsItem;
