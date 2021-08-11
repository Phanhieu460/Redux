import React, { Component } from "react";
import { connect } from "react-redux";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createDate: "24/07/2021",
    };
  }
  onDeleteFormID = (id) => {
    this.props.onDelete(id);
  };
  onUpdateAccId = (id) => {
    this.props.onUpdate(id);
  };
  render() {
    console.log(this.props.listAccount_redux);
    let listAccounts = this.props.listAccount_redux;
    const rows = listAccounts.map((item, index) => {
      return (
        <tr key={index}>
          <th>{item.ID}</th>
          <th>{item.Email}</th>
          <th>{item.Username}</th>
          <th>{item.Fullname}</th>
          <th>{item.Department}</th>
          <th>{item.Position}</th>
          <th>{item.createDate}</th>
          <th>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.onUpdateAccId(item.ID)}
            >
              Edit
            </button>
          </th>
          <th>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.onDeleteFormId(item.ID)}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
    return rows;
  }
}
const mapStateToProps = (state) => {
  return {
    listAccount_redux: state.account,
  };
};

export default connect(mapStateToProps, null)(ResultItem);
