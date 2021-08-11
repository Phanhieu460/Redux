import * as actionTypes from "../Constants/ActionTypes";

export const getListAccount = () => {
  return {
    type: actionTypes.GET_LIST_ACCOUNT,
  };
};
export const addListAccount = (acc) => {
  return {
    type: actionTypes.ADD_LIST_ACCOUNT,
    account: acc,
  };
};
