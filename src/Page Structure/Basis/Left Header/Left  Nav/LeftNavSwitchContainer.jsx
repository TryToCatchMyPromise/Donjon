import LeftNav from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNav";
import {Route, Switch} from "react-router";

const LeftNavSwitchContainer = ({leftNav}) => {

  return (
      <Switch>
        <Route exact path= "/">
          <LeftNav section = { leftNav.sectionNames.main}/>
        </Route>
        <Route path= "/hotel">
          <LeftNav section = { leftNav.sectionNames.hotel}/>
        </Route>
        <Route path= "/restaurant">
          <LeftNav section = { leftNav.sectionNames.restaurant}/>
        </Route>
        <Route path= "/services">
          <LeftNav section = { leftNav.sectionNames.services}/>
        </Route>
        <Route path= "/contacts">
          <LeftNav section = { leftNav.sectionNames.contacts}/>
        </Route>

      </Switch>

  );
};

export default LeftNavSwitchContainer;
