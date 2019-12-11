import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import "../CSS/ArticlesList.css";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    axios
      .get(`https://rose-nc-news-app.herokuapp.com/api/articles`)
      .then(res => this.setState({ articles: res.data.articles }));
  }
  render() {
    return (
      <div>
        <h1 id="listTitle">Articles</h1>

        {this.state.articles.map(article => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
