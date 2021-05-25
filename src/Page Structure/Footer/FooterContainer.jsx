import React from "react";
import {connect} from "react-redux";
import Footer from "src/Page Structure/Footer/Footer";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
