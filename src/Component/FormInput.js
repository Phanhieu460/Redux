import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Demo_Redux/Actions/index";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Email: "",
      Username: "",
      Fullname: "",
      Department: "",
      Position: "",
      createDate: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // let accounts = {
    //   ID: this.state.ID,
    //   Email: this.state.Email,
    //   Username: this.state.Username,
    //   Fullname: this.state.Fullname,
    //   Department: this.state.Department,
    //   Position: this.state.Position,
    //   createDate: this.state.createDate,
    // };

    // this.props.onSaveForm(accounts);
    this.props.addAccount(this.state);

    event.preventDefault();
  };
  handleUpdate = () => {
    console.log("Update");
    this.props.updateAccButton(this.state);
  };
  handleReset = () => {
    this.setState({
      ID: "",
      Email: "",
      Username: "",
      Fullname: "",
      Department: "",
      Position: "",
      createDate: "",
    });
  };
  onShowForm = () => {
    this.props.onShowForm();
  };
  componentDidMount = () => {
    if (this.props.accountUpdate) {
      this.setState({
        ID: this.props.accountUpdate.ID,
        Email: this.props.accountUpdate.Email,
        Username: this.props.accountUpdate.Username,
        Fullname: this.props.accountUpdate.Fullname,
        Department: this.props.accountUpdate.Department,
        Position: this.props.accountUpdate.Position,
        createDate: this.props.accountUpdate.createDate,
      });
    }
  };
  static getDerivedStateFromProps(new_props, state) {
    //console.log("New Props", new_props);
    if (new_props.accountUpdate === null) {
      return;
    }
    if (new_props.accountUpdate.ID !== state.ID) {
      return {
        ID: new_props.accountUpdate.ID,
        Email: new_props.accountUpdate.Email,
        Username: new_props.accountUpdate.Username,
        Fullname: new_props.accountUpdate.Fullname,
        Department: new_props.accountUpdate.Department,
        Position: new_props.accountUpdate.Position,
        createDate: new_props.accountUpdate.createDate,
      };
    }
  }
  render() {
    return (
      <div className="container">
        <form>
          <h3>Quản Lý Nhân Viên</h3>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              className="form-control"
              placeholder="ID"
              name="ID"
              value={this.state.ID}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="Email"
              value={this.state.Email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              className="form-control"
              name="Username"
              value={this.state.Username}
              onChange={this.handleChange}
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Fullname:</label>
            <input
              type="text"
              className="form-control"
              name="Fullname"
              value={this.state.Fullname}
              onChange={this.handleChange}
              placeholder="Enter Fullname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department_id">Select A Department</label>
            <select
              className="form-control"
              name="Department"
              value={this.state.Department}
              onChange={this.handleChange}
            >
              <option>Select A Department</option>
              <option>Business Development</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="position_id">Select A Position</label>
            <select
              className="form-control"
              name="Position"
              value={this.state.Position}
              onChange={this.handleChange}
            >
              <option>Select A Position</option>
              <option>PM</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Create Date:</label>
            <input
              type="date"
              className="form-control"
              name="createDate"
              value={this.state.createDate}
              onChange={this.handleChange}
              placeholder="Create Date"
            />
          </div>
          <div className="btn-group" role="group">
            <button
              type="button"
              id="save"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-default"
              id="update"
              onClick={this.handleUpdate}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-warning"
              id="reset"
              onClick={this.handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="reset"
              onClick={this.onShowForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    addAccount: (account) => dispatch(actions.addListAccount(account)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
