import React, { Component } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";

class ArticlesByTopic extends Component {
  render() {
    return (
      <div>
        <Header />
        <ArticlesList topic = {this.props.topic} />
      </div>
    );
  }
}

export default ArticlesByTopic;
