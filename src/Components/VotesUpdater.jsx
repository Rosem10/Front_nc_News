import React, { Component } from "react";

export default class VotesUpdater extends Component {
  state = {
    voteDifference: 0
  };

  handleClick = event => {
    const { value } = event.target;
    this.setState({ voteDifference: value });
    this.props.VotesChanger(this.state.voteDifference);
  };

  render() {
    return (
      <div>
        <button id="upvote" value={1} onClick={this.handleClick}>
          I like it!
        </button>
        <p>{}</p>
        <button value={-1} onClick = {this.handleClick}>I hate it!</button>
      </div>
    );
  }
}
