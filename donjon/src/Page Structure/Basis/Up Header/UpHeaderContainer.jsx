import React from "react";
import {connect} from "react-redux";
import UpHeader from "./UpHeader";

const UpHeaderContainer = connect()(UpHeader);

export default UpHeaderContainer;