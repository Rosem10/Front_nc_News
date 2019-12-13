import React, { Component } from "react";
import axios from "axios";
import "../CSS/SingleArticle.css";
import { Link} from "@reach/router";
import Comments from "./Comments"


class SingleArticle extends Component {
  state = { article: [], isLoading: true };

  componentDidMount() {
    const { articleId } = this.props;
    axios
      .get(`http://rose-nc-news-app.herokuapp.com/api/articles/${articleId}`)
      .then(res =>
        this.setState({ article: res.data.article, isLoading: false })
      );
  }

  render() {
    const {
      topic,
      title,
      author,
      body,
      comment_count,
      created_at,
      votes,
      article_id
    } = this.state.article;

    return (
      <div id="SingleArticle">
        <h2 id="articleTitle">{title}</h2>
        <h3 id="head">
          <Link to={`/articles/author/${author}`}>
          {author} </Link><br /> {topic}{" "}
        </h3>
        <h4 id="article">{body}</h4>
        <h5 id="footer">
          <label>Comments: {comment_count}</label>
          <br />
          <label>Votes: {votes}</label>
          <br />
          <label>Posted: {created_at}</label>
          <br />
        </h5>

        <Comments article_id = {article_id}/>
  
      </div>
    );
  }
}

export default SingleArticle;
