import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// how to pass in parameter here?
export function* watcherSaga(p) {
  yield takeLatest("API_GET_REQUEST", workerSaga);
  //do I need a worksaga for each request?
  yield takeLatest("API_POST_REQUEST", workerSagaPost);
  
}

// worker saga: makes the api calls when watcher saga sees get request
function* workerSaga(p) {
  try {
    debugger
    const response = yield call(doGet);
    const message = response.data.author;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_GET_SUCCESS", message });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_GET_FAILURE", error });
  }
}
// worker saga: makes the api calls when watcher saga sees the post request(DO I NEED THIS WORKERSAGE OR CAN IT BE PART OF 1 WORKERSAGE??)
function* workerSagaPost(p) {
  try {
    debugger
    const response = yield call(doPost);
    const message = response.data.author;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_POST_SUCCESS", message });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_POST_FAILURE", error });
  }
}



// simulate post request
function doPost() {
  debugger
  return axios({
    method: "post",
    url: "http://localhost:3000/posts/"
  });
}

//get message 1
function doGet() {
  debugger
  return axios({
    method: "get",
    url: "http://localhost:3000/posts/1"
  });
}