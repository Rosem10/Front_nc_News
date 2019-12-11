import React from "react";
import "../CSS/ArticleCard.css";

export default function ArticleCard(props) {
  const { title, author, comment_count, created_at } = props.article;

  return (
    <div className="ArticleCard">
      <h2 id="title">{title}</h2>
      <p id="body">
        By: {author}
        <br />
        At: {created_at}
        <br />
        Comments: {comment_count}
        <br />
      </p>
    </div>
  );
}
