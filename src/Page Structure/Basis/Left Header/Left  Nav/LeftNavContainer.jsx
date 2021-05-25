import React from "react";
import {connect} from "react-redux";
import LeftNavSwitchContainer from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNavSwitchContainer";

const mapStateToProps = (state) => {
  return {
    leftNav: state.leftNav,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const LeftNavContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavSwitchContainer);

export default LeftNavContainer;
