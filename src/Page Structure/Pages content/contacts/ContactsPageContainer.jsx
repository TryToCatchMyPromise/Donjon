import React from "react";
import {connect} from "react-redux";
import ContactsPage from "src/Page Structure/Pages content/contacts/ContactsPage";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const ContactsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

export default ContactsPageContainer;
