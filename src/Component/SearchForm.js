import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="container row">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            id="input-search-department"
            placeholder="Search by Email, FullName, Department"
            aria-label="Search"
            aria-describedby="search-addon"
            name="search_key"
            onChange={this.onChange}
          ></input>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handleSearch}
          >
            search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
