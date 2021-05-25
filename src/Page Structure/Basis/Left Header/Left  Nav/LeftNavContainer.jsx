import React from "react";
import {connect} from "react-redux";
import LeftNavSwitchContainer from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNavSwitchContainer";

let mapStateToProps = (state) => {
  return {
    leftNav: state.leftNav,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

const LeftNavContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavSwitchContainer);

export default LeftNavContainer;
