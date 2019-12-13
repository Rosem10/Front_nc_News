import React, { Component } from "react";

export default class SortList extends Component {
  state = {
    sortBy: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      sortBy: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { sortBy } = this.state;
    this.props.changeSortOrder(sortBy);
  };

  render() {
    return (
      <form>
          <label>Sort By:
        <input
          type="text"
          value={this.state.sortBy}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Go!
        </button>
      </label>
      </form>
    );
  }
}
