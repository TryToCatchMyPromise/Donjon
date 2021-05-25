import React from "react";
import {connect} from "react-redux";
import HotelPage from "src/Page Structure/Pages content/hotel_page/HotelPage";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const HotelPageContainer = connect(mapStateToProps, mapDispatchToProps)(HotelPage);

export default HotelPageContainer;
