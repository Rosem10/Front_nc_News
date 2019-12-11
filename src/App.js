import React from "react";
import "./CSS/App.css";
import Articles from "./Components/Articles";
import Topicslist from "./Components/TopicsList"
import Authorslist from "./Components/AuthorsList"
import ArticlesByTopic from "./Components/ArticlesByTopic"
import SingleArticle from"./Components/SingleArticle"
import { Router } from "@reach/router";


function App() {
  return (
    <div className = "App">
    <Router>
      <Articles path="/articles" />
      <SingleArticle path = "/articles/:articleId"/>
      <ArticlesByTopic path = "/articles/:topic"/>
      <Topicslist path = "/topics"/>
      <Authorslist path = "/authors"/>
    </Router>
    </div>
  );
}

export default App;
