import React from "react";
import {connect} from "react-redux";
import RestaurantPage from "./RestaurantPage";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const RestaurantPageContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);

export default RestaurantPageContainer;