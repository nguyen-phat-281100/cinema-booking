import React, { Component } from "react";

export default class MovieDetails extends Component {
  // componentDidMount() {
  //   const {} = this.props.match;
  //   fetchMovieDetail(params.id);
  // }
  render() {
    console.log(this.props.match.params);
    return <div>MovieDetail{this.props.match.params}</div>;
  }
}
