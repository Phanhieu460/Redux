import React, { Component } from "react";
import "./App.css";
import FormInput from "./Component/FormInput";
import Result from "./Component/Result";
import SearchForm from "./Component/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
      isShowFormInput: false,
      accountUpdate: null,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("listAccounts")) {
      let listAccounts = JSON.parse(localStorage.getItem("listAccounts"));
      this.setState({
        listAccounts: listAccounts,
      });
    }
  }

  showFormInput = () => {
    this.setState({
      isShowFormInput: !this.state.isShowFormInput,
    });
  };
  onShowForm = () => {
    this.setState({
      isShowFormInput: !this.state.isShowFormInput,
    });
  };
  onSaveForm = (data) => {
    console.log(data); // Kiểm tra lại dữ liệu nhận được từ InputForm
    let listAccounts = this.state.listAccounts;
    listAccounts.push(data); // push dữ liệu vào listAccount hiện tại
    this.setState({
      listAccounts: listAccounts, // Thực hiện set lại State
    });
    // Thực hiện lưu dữ liệu vào LocalStorage
    localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  };
  onDelete = (id) => {
    let indexAccDel = this.state.listAccounts.findIndex((acc) => acc.ID === id);
    if (indexAccDel !== -1) {
      this.state.listAccounts.splice(indexAccDel, 1);
      this.setState({
        listAccounts: this.state.listAccounts,
      });
      localStorage.setItem(
        "listAccounts",
        JSON.stringify(this.state.listAccounts)
      );
    }
  };
  onUpdate = (id) => {
    let indexAccUpdate = this.state.listAccounts.findIndex(
      (acc) => acc.ID === id
    );
    if (indexAccUpdate !== -1) {
      let accountUpdate = this.state.listAccounts[indexAccUpdate];
      //console.log("Thong tin acc can update:", accountUpdate);
      this.setState({
        isShowFormInput: true,
        accountUpdate: accountUpdate,
      });
    }
  };
  updateAccButton = (account) => {
    let indexAccUpdate = this.state.listAccounts.findIndex(
      (acc) => acc.ID === account.ID
    );
    if (indexAccUpdate !== -1) {
      let listUpdate = this.state.listAccounts;
      listUpdate[indexAccUpdate] = account;
      this.setState({
        listAccounts: listUpdate,
      });
      localStorage.setItem("listAccounts", JSON.stringify(listUpdate));
    }
  };
  render() {
    return (
      <div className="App">
        <SearchForm />
        <input
          type="button"
          className="btn btn-primary"
          value="Create Account"
          onClick={this.showFormInput}
        />

        {this.state.isShowFormInput ? (
          <FormInput
            onShowForm={this.onShowForm}
            onSaveForm={this.onSaveForm}
            accountUpdate={this.state.accountUpdate}
            updateAccButton={this.updateAccButton}
          />
        ) : (
          ""
        )}
        <Result
          listAccounts={this.state.listAccounts}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
        />
      </div>
    );
  }
}

export default App;
