import React from "react";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
// import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Main from "./Main";

const MainContainer = connect()(Main);


export default MainContainer;