import React from "react";
import {connect} from "react-redux";
import ArrowDownSwitchContainer from "./ArrowDownSwitchContainer";

let mapStateToProps = (state) => {
  return {
    arrowDown: state.arrowDown,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

const ArrowDownContainer = connect(mapStateToProps, mapDispatchToProps)(ArrowDownSwitchContainer);

export default ArrowDownContainer;
