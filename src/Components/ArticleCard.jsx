import React, { Component } from "react";
import "../CSS/ArticleCard.css";
import { Link } from "@reach/router";
import VotesUpdater from "./VotesUpdater";

export default class ArticleCard extends Component {
  state = {
    voteChange: 0
  }

  VotesChanger = votesDifference => {
    this.setState((currentState)=>{
      return {voteChange: currentState.voteChange + +votesDifference}
    })
    

    
  };

  render() {
    const {
      article_id,
      title,
      author,
      comment_count,
      created_at,
      votes
    } = this.props.article;
    return (
      <div className="ArticleCard">
        <Link to={`/articles/${article_id}`}>
          <h2 id="title">{title}</h2>
        </Link>
        <p id="body">
          By: {author}
          <br />
          At: {created_at}
          <br />
          Comments: {comment_count}
          <br />
          Votes: {votes + this.state.voteChange}
        </p>
        <VotesUpdater
          votes={votes}
          article_id={article_id}
          VotesChanger={this.VotesChanger}
        />
      </div>
    );
  }
}
