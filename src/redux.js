import { actionChannel } from "redux-saga/effects";

const API_GET_REQUEST = "API_GET_REQUEST";
const API_GET_REQUEST_SUCCESS = "API_GET_REQUEST_SUCCESS";

function reducer(state = "hello", action) {
  debugger;
  switch (action.type) {
    case API_GET_REQUEST:
      return state;
    case API_GET_REQUEST_SUCCESS:
      return action.data;
  }
}

export default reducer;
