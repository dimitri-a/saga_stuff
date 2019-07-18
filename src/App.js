import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  const { datas } = props;
  return <div className="App">{datas}</div>;
}

const mapStateToProps = state => {
  return {
    datas: state
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequestDog: () => dispatch({ type: "API_CALL_REQUEST_POST" })
//   };
// };

export default connect(
  mapStateToProps,
  {}
)(App);
