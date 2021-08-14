import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className=" col-3 card">
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.bl0urCoCXbhDLwtOVs_R2AHaNK?pid=ImgDet&rs=1"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/1">
                View Details
              </Link>
            </div>
          </div>
          <div className=" col-3 card">
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.bl0urCoCXbhDLwtOVs_R2AHaNK?pid=ImgDet&rs=1"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/2">
                View Details
              </Link>
            </div>
          </div>
          <div className=" col-3 card">
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.bl0urCoCXbhDLwtOVs_R2AHaNK?pid=ImgDet&rs=1"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/3">
                View Details
              </Link>
            </div>
          </div>
          <div className=" col-3 card">
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.bl0urCoCXbhDLwtOVs_R2AHaNK?pid=ImgDet&rs=1"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/4">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
