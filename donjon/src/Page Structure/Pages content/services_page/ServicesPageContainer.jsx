import React from "react";
import {connect} from "react-redux";
import ServicesPage from "./ServicesPage";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const ServicesPageContainer = connect(mapStateToProps, mapDispatchToProps)(ServicesPage);

export default ServicesPageContainer;