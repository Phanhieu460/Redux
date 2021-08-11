import * as actionTypes from "../Constants/ActionTypes";
let listAccounts = [];
if (localStorage && localStorage.getItem("listAccounts")) {
  listAccounts = JSON.parse(localStorage.getItem("listAccounts"));
}
const initialState = listAccounts;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_ACCOUNT:
      return state;
    case actionTypes.ADD_LIST_ACCOUNT:
      console.log("Đây là log từ account_reducer", action.account);
      let listAccount_add = {
        ID: action.account.ID,
        Email: action.account.Email,
        Username: action.account.Username,
        Fullname: action.account.Fullname,
        Department: action.account.Department,
        Position: action.account.Position,
        createDate: action.account.createDate,
      };

      state.push(listAccount_add);
      localStorage.setItem("listAccounts", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};
export default reducer;
