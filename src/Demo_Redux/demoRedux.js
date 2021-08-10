import { createStore } from "redux";

const initialState = {
  isShowInputForm: false,
  listAccount: [],
};
const action_IsShowInputForm = {
  type: "SHOW_INPUT_FORM",
};
const action_addAccount = {
  type: "ADD_ACCOUNT",
  account: {
    id: 1,
    nam: "PH",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      let isShowInputForm;
      isShowInputForm = !state.isShowInputForm;
      return {
        ...state,
        isShowInputForm: isShowInputForm,
      };
    case "ADD_ACCOUNT":
      let account = action.account;
      let new_listAcc = [];
      new_listAcc = state.listAccount;
      new_listAcc.push(account);
      return {
        ...state,
        listAccount: new_listAcc,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
store.dispatch(action_IsShowInputForm);

store.dispatch(action_addAccount);
