import React, { Component } from "react";
import axios from "axios";

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
      created_at
    } = this.state.article;

    return (
      <div>
        <h2 id="articleTitle">{title}</h2>
        
        <h3 id="head">
          {author} <br /> {topic}{" "}
        </h3>
        <h4 id="article">{body}</h4>
        <h5 id="footer">
          {comment_count}
          <br />
          {created_at}
          <br />
        </h5>
      </div>
    );
  }
}

export default SingleArticle;
