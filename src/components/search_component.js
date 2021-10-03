import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="search" id="form1" className="form-control" placeholder="Search" />
        <button type="button" className="btn btn-primary">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Search;
