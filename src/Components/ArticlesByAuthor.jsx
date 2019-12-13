import React, { Component } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";

class ArticlesByAuthor extends Component {
  render() {
    const author = this.props.authorName;
    return (
      <div>
        <Header />
        <h1>Here are all our articles by {author}!</h1>
        <ArticlesList author={author} />
      </div>
    );
  }
}

export default ArticlesByAuthor;
