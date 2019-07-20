import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_GET_REQUEST", workerSaga);
  
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    debugger
    const response = yield call(fetchGet);
    const post = response.data.author;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_GET_SUCCESS", post });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}


// how to pass in parameter p?
function fetchGet(p) {
  debugger
  return axios({
    method: "get",
    url: "http://localhost:3000/posts/"+p
  });
}
