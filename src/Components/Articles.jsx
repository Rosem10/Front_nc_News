import React, { Component } from "react";
import Header from "./Header";
import ArticlesList from "./ArticlesList";

export default class Articles extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 id="ArticlesTitle">Here are all our articles!</h1>
        <ArticlesList />
      </div>
    );
  }
}
