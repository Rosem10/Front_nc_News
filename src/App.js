import React from "react";
import "./CSS/App.css";
import Articles from "./Components/Articles";
import Topicslist from "./Components/TopicsList";
import Authorslist from "./Components/AuthorsList";
import SingleArticle from "./Components/SingleArticle";
import ArticlesByQuery from "./Components/ArticlesByQuery";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Articles path="/articles" />
        <SingleArticle path="/articles/:articleId" />
        <ArticlesByQuery path="/articles/topic/:topicName" />
        <ArticlesByQuery path="/articles/author/:authorName" />
        <Topicslist path="/topics" />
        <Authorslist path="/authors" />
      </Router>
    </div>
  );
}

export default App;
