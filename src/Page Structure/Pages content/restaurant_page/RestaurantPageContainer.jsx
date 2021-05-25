import React from "react";
import {connect} from "react-redux";
import RestaurantPage from "src/Page Structure/Pages content/restaurant_page/RestaurantPage";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const RestaurantPageContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);

export default RestaurantPageContainer;
