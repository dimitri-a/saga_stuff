import React from "react";
import "./App.css";
import { connect } from "react-redux";

function getMessage(props) {
  debugger
  props.onRequestGet();
}

function updateMessage(props) {
  debugger
  props.onRequestUpdate();
}

function App(props) {
  const { message, datas } = props;
  return (
    <div className="App">
      {message}
      <button onClick={()=>getMessage(props)}>get message</button>
      <button onClick={()=>updateMessage(props)}>update message</button>
     {datas}
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
    onRequestGet: p => dispatch({ type: "API_GET_REQUEST"}),
    onRequestUpdate: p => dispatch({ type: "API_POST_REQUEST"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
