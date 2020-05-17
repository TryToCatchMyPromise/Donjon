import React from "react";
import {connect} from "react-redux";
import HotelBooking from "./HotelBooking";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const HotelBookingContainer = connect(mapStateToProps, mapDispatchToProps)(HotelBooking);

export default HotelBookingContainer;