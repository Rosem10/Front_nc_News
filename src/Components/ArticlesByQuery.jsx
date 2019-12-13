import React, { Component } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";

class ArticlesByQuery extends Component {
  render() {
    const topic = this.props.topicName;
    const author = this.props.authorName;
    
    if (topic)
      return (
        <div>
          <Header />
          <h1>Here are all our articles on {topic}!</h1>
          <ArticlesList topic={topic} />
        </div>
      );
  
  if(author) {
    return (
      <div>
        <Header />
        <h1>Here are all our articles by {author}!</h1>
        <ArticlesList author={author} />
      </div>
    );
  }
}}

export default ArticlesByQuery;
