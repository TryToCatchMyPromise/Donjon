import React from "react";
import {connect} from "react-redux";
import ImageTransfer from "./ImageTransfer";


let mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
};

let mapDispatchToProps = (dispatch) => {

};

const ImageTransferContainer = connect(mapStateToProps, mapDispatchToProps)(ImageTransfer);

export default ImageTransferContainer;