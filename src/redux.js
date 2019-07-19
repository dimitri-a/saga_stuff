import { actionChannel } from "redux-saga/effects";

const API_GET_REQUEST = "API_GET_REQUEST";
const API_GET_SUCCESS = "API_GET_SUCCESS";

function reducer(state = "hello", action) {

  switch (action.type) {
    case API_GET_REQUEST:
      return state;
    case API_GET_SUCCESS:
        debugger
      return action.post;
  }
}

export default reducer;
