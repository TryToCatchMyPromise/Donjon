import React from "react";
import {Route, Switch} from "react-router";
import ArrowDown from "./ArrowDown";

const ArrowDownSwitchContainer = (props) => {

  return (
      <Switch>
        <Route exact path={"/"}>
          <ArrowDown hash = {props.arrowDown.hash.main}/>
        </Route>
        <Route path={"/hotel"}>
          <ArrowDown hash = {props.arrowDown.hash.hotel}/>
        </Route>
        <Route path={"/restaurant"}>
          <ArrowDown hash = {props.arrowDown.hash.restaurant}/>
        </Route>
        <Route path={"/services"}>
          <ArrowDown hash = {props.arrowDown.hash.services}/>
        </Route>
        <Route path={"/contacts"}>
          <ArrowDown hash = {props.arrowDown.hash.contacts}/>
        </Route>

      </Switch>

  );
};

export default ArrowDownSwitchContainer;