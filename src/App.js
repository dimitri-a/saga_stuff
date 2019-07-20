import React from "react";
import "./App.css";
import { connect } from "react-redux";

function getMessage(props) {
  debugger
  props.onRequestGetMessage();
}

function updateMessage(props) {
  debugger
  props.onRequestUpdateMessage();
}

function App(props) {
  const { message } = props;
  return (
    <div className="App">
      {message}
      <button onClick={()=>getMessage(props)}>get message</button>
      <button onClick={()=>updateMessage(props)}>update message</button>
     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    datas: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestGet: p => dispatch({ type: "API_GET_REQUEST"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
