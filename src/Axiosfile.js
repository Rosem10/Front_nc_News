import axios from "axios";

export default function GetAllArticles() {
  return axios
    .get(`https://rose-nc-news-app.herokuapp.com/api/articles`)
    .then(res => this.setState({ articles: res.data.articles }));
}
