import React, { Component } from "react";
import Header from "./Header"
import ArticlesList from "./ArticlesList"



export default class Articles extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ArticlesList/>
      </div>
    );
  }
}
