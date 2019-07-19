import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {

  props.onRequestPost();
  const { datas } = props;
  return <div className="App">{datas}</div>;
}

const mapStateToProps = state => {
  return {
    datas: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestPost: () => dispatch({ type: "API_GET_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
