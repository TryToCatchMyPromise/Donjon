import React from "react";
import {connect} from "react-redux";
import MainPage from "./MainPage";

const MainPageContainer = connect()(MainPage);

export default MainPageContainer;