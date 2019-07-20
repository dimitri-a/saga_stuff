import React from "react";
import "./App.css";
import { connect } from "react-redux";

function postOne(props, p) {
  debugger
  props.onRequestGet(p);
}

function App(props) {
  const { datas } = props;
  return (
    <div className="App">
      {datas}
      <button onClick={()=>postOne(props,1)}>post 1</button>
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
    onRequestGet: p => dispatch({ type: "API_GET_REQUEST", data: p })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
