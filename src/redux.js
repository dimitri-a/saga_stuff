import { actionChannel } from "redux-saga/effects";

const API_GET_REQUEST = "API_GET_REQUEST";
const API_GET_SUCCESS = "API_GET_SUCCESS";
const API_POST_SUCCESS="API_POST_SUCCESS";

function reducer(state = "hello", action) {

  switch (action.type) {
 
    case API_GET_SUCCESS:
        debugger
      return action.message;

    case API_POST_SUCCESS:
        debugger
        //refresh data
        //dispatch API_GET_REQUEST
        //what is the handiest to update data in component?
      return action.message;
  }
}

export default reducer;
