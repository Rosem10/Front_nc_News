import React, { Component } from "react";

export default class CreatePost extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const { sortBy } = this.state;
        this.props.changeSortOrder(sortBy);
      };
      
  render() {
    return (
      <form>
        <label>
          <button type="submit" onSubmit={this.handleSubmit}>
            Create New Post?
          </button>
        </label>
      </form>
    );
  }
}
