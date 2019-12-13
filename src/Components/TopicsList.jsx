import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import TopicListItem from "./TopicListItem";
//import GetAllArticles from "../Axiosfile";

class Topicslist extends Component {
  state = { topics: [] };

  componentDidMount() {
    axios
      .get(`https://rose-nc-news-app.herokuapp.com/api/topics`)
      .then(res => this.setState({ topics: res.data.topics }));
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.topics.map(topic => (
          <TopicListItem topic={topic} key={topic.slug} />
        ))}
      </div>
    );
  }
}

export default Topicslist;
