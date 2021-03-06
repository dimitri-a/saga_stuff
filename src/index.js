import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { watcherSaga } from "./sagas";
import { Provider } from "react-redux";
import reducer from './redux.js'
//const logger = createLogger();

//hookup saga
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// // create a redux store with our reducer above and middleware
// let store = createStore(reducer, reduxDevTools ,applyMiddleware(sagaMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)(createStore);

let store = createStoreWithMiddleware(reducer, {});


// run the saga
sagaMiddleware.run(watcherSaga);


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
