import React, { Component } from 'react';
import axios from "axios"
import Header from "./Header"
import AuthorListItem from "./AuthorsLisItem"

class AuthorsList extends Component {
    state = {authors: []}

    componentDidMount(){
        axios
        .get(`https://rose-nc-news-app.herokuapp.com/api/users`)
        .then(res => this.setState({authors: res.data.authors}))}

    render() {
        return (
            <div>
        <Header />
       {this.state.authors.map(author => (
          <AuthorListItem author={author} key={author.username} />
        ))}
            </div>
        );
    }
}

export default AuthorsList;