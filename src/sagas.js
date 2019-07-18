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
    const response = yield call(fetchPost);
    const post = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: "API_GET_SUCCESS", post });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

function* workerSagaPost() {
  try {
    debugger
    const response = yield call(postSomething);
    const what = response.data.message;

    // dispatch a success action to the store with the new dog
    debugger;
    yield put({ type: "API_CALL_SUCCESS_POST", what });
  } catch (error) {
    debugger;
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// const json = yield call(() =>
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(myJson => myJson)
//   );
//   yield put({ type: "RECEIVED_DATA", json: json });

// function that returns api response
function fetchPost() {
  debugger
  return axios({
    method: "get",
    url: "http://localhost:3000/posts/2"
  });
}


function postSomething(){
  debugger;
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}
