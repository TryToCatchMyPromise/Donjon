import React from "react";
import LeftNav from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNav";
import {Route, Switch} from "react-router";

const LeftNavSwitchContainer = (props) => {

  return (
      <Switch>
        <Route exact path={"/"}>
          <LeftNav section = {props.leftNav.sectionNames.main}/>
        </Route>
        <Route path={"/hotel"}>
          <LeftNav section = {props.leftNav.sectionNames.hotel}/>
        </Route>
        <Route path={"/restaurant"}>
          <LeftNav section = {props.leftNav.sectionNames.restaurant}/>
        </Route>
        <Route path={"/services"}>
          <LeftNav section = {props.leftNav.sectionNames.services}/>
        </Route>
        <Route path={"/contacts"}>
          <LeftNav section = {props.leftNav.sectionNames.contacts}/>
        </Route>

      </Switch>

  );
};

export default LeftNavSwitchContainer;
