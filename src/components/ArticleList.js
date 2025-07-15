import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  if (!Array.isArray(posts)) {
    return <main>No articles to display.</main>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
};

export default ArticleList;
