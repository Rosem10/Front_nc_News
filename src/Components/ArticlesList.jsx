import React, { Component } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import "../CSS/ArticlesList.css";
import SortList from "./SortList";
import CreatePost from "./CreatePost";
// import {getAllArticles} from "../"

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sortBy: "" };

  componentDidMount() {
    axios
      .get(`https://rose-nc-news-app.herokuapp.com/api/articles`)
      .then(res => this.setState({ articles: res.data.articles }));
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      const { topic, author } = this.props;
      const { sortBy } = this.state;
      axios
        .get(`https://rose-nc-news-app.herokuapp.com/api/articles`, {
          params: { topic: topic, author: author, sort_by: sortBy }
        })
        .then(res => this.setState({ articles: res.data.articles }));
    }
  }

  changeSortOrder = sortBy => {
    this.setState({ sortBy: sortBy });
  };

  render() {
    return (
      <div>
        <SortList changeSortOrder={this.changeSortOrder} />
        <CreatePost />
        {this.state.articles.map(article => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
