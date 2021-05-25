import React from "react";
import {connect} from "react-redux";
import HotelBooking from "src/Page Structure/Pages content/hotel_page/Booking/HotelBooking";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const HotelBookingContainer = connect(mapStateToProps, mapDispatchToProps)(HotelBooking);

export default HotelBookingContainer;
